import { Request, Response } from "express";
import Cafe from "../models/cafe";
import multer from "multer";
import Nickname from "../models/nickname";
import User from "../models/user";

// multer-optional
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
var upload = multer({ storage: storage }).single("cafe_img");

// 이미지 업로드
export const uploadImg = (req: Request, res: Response) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};

// 카페 생성
export const create = async (req: Request, res: Response) => {
  const { name, thumbnail, route, manager } = req.body;

  try {
    // 카페 이름이 이미 존재하는지 확인
    const cafeNameExist = await Cafe.findOne({
      name,
    });
    if (cafeNameExist) {
      return res.status(409).json({
        success: false,
        message: "카페이름이 이미 존재합니다.",
      });
    }

    // 카페 라우터가 이미 존재하는지 확인
    const cafeRouteExist = await Cafe.findOne({
      route,
    });

    if (cafeRouteExist) {
      return res.status(409).json({
        success: false,
        message: "카페 주소가 이미 존재합니다.",
      });
    }

    let cafe = new Cafe(req.body);
    cafe = await cafe.populate("manager").execPopulate(); // save 하기 전에 populate 한번 하는거임
    cafe.members.push(manager);

    let user = await User.findOne({ _id: manager });
    user.cafes.push(cafe._id);
    await user.save();
    await cafe.save();

    return res.status(201).json({
      success: true,
      cafe,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 내 카페 리스트 조회
export const readMyCafeList = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ _id: userId }).populate("cafes");
    return res.status(200).json({
      success: true,
      cafes: user.cafes,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 전체 카페 리스트 조회
export const readAllCafeList = async (req: Request, res: Response) => {
  try {
    const cafes = await Cafe.find();
    return res.status(200).json({
      success: true,
      cafes,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 카페 상세 정보
export const CafeInfo = async (req: Request, res: Response) => {
  const { route, userId } = req.params;
  try {
    let cafeInfo = await Cafe.findOne({ route }).populate("manager", {
      name: 1,
      email: 1,
    }); // manager를 populate 하는데  name: true, email: true 니깐 name과 email을 populate 하란 소리임
    if (!cafeInfo) {
      return res.status(400).json({
        success: false,
        message: "해당 라우트를 가진 카페가 없습니다",
      });
    }

    const member = cafeInfo.members.some(
      // 현재 접속한 유저가 카페 맴버인지 확인
      (m: any) => m._id.toString() === userId
    );

    return res.status(200).json({
      success: true,
      cafeInfo,
      member,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 닉네임 중복 확인
export const checkNickname = async (req: Request, res: Response) => {
  const { cafeId, nickname } = req.body;

  try {
    if (!cafeId) {
      return res.status(400).json({
        success: false,
        message: "카페가 존재하지 않습니다.",
      });
    }
    const valid = await Nickname.findOne({
      cafe: cafeId,
      nickname,
    });

    if (valid) {
      return res.status(409).json({
        success: false,
        message: "이미 존재하는 닉네임 입니다.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "사용 가능한 닉네임 입니다.",
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
