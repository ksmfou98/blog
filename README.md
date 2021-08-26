# <div align="center">dofe - community</div>

### <div align="center">커뮤니티 및 채팅을 할 수 있는 친목도모 서비스 👨‍💻👩‍💻</div>

<br />

<img src="https://user-images.githubusercontent.com/64634992/128634644-78bf40ce-3775-4580-8517-ad0d0de94313.png" width="100%" />

<br />
<br />

## 프로젝트 설명

커뮤니티를 좋아하는 한 유저 입장에서 불편하다고 느꼈던 점, 개선하고 싶은 점을 이 프로젝트를 통해서 개발하고자 하였습니다.

<br />

## 기존 커뮤니티의 불편 했던 점

저는 주로 네이버 카페 "맥쓰사", 개발자 커뮤니티 "Okky"를 자주 이용합니다. 이런 커뮤니티를 이용하면서 대표적으로 불편했던 점은 게시판의 게시물이 제목만 노출 된다는 점 입니다.

제목은 정말 궁금함을 유도하는 제목이지만, 막상 내용을 보면 별거 없거나, 광고였던 적이 한 두 번이 아니었습니다.

대표적인 모바일 SNS(페이스북, 인스타그램, 에브리 타임)를 보면 게시물의 제목과 내용이 같이 노출됩니다. 그렇기 때문에 광고가 나오면 바로 내려 버릴 수 있고, 자극성 제목의 속지 않고 내용이 보이기 때문에 콘텐츠를 잘 이용할 수 있습니다.

<br />

## 개선 하고 싶은 기능

- 게시물의 제목과 내용이 같이 보이도록 구현
- 각 카페의 친목을 할 수 있는 채팅방 기능
- 카페의 댓글과 같은 기능의 실시간 알림

<br />

## 기술 스택

### Front-End

- React
- Typescript
- React-router
- Redux
- Redux-toolkit
- socket io
- Styled-components

### Back-End

- Nodejs
- Typescript
- socket io
- Expressjs
- mongoDB
- mongoose

<br/>

## UI Screen (이미지를 클릭하시면 크게 보실 수 있습니다 !)

<img src="https://user-images.githubusercontent.com/64634992/128635224-53fb7d14-d14d-4acb-98c4-4cc3f87c60eb.png" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128635277-0f5ca7ac-e168-47df-a410-508c7b8b0cff.png" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128635286-4a76e9d8-0f39-40e7-a5a9-36ea57d23c43.png" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128635294-2ce3b8e7-2af1-49c1-9742-dcbb491c6628.png" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128635306-25697ba5-1242-43a1-875a-959a8458f9d8.png" width="48%" /><img src="https://user-images.githubusercontent.com/64634992/128635309-74575639-5fbd-4e17-811e-271a219560df.png" width="48%" />

<br />
<br />

## 프로젝트 실행 방법

### 필수 구성 요소

- Node.js
- MongoDB

<br />

### 설치

1. 프로젝트 클론

```
$ git clone "https://github.com/ksmfou98/cafe.git"
```

2. 패키지 설치

코드 에디터(ide) 로 프로젝트 폴더 실행 후 터미널 실행

```
$ cd client
$ npm install
```

새 터미널 실행

```
$ cd server
$ npm install

```

3. `env` 설정 server 폴더 안에 .env 파일 생성 후 아래 내용 추가

```
PORT=4000
DBURL="몽고디비 주소 입력"
JWT_SECRET=cafeCommunity
```

4. 서버 실행

server

```
$ cd server
$ npm run dev
```

client

```
$ cd client
$ npm start
```

<br />
<br />

## 프로젝트를 통해 배운점

- socket io를 처음 써봤습니다. 처음엔 어떻게 해야 될지 막막했지만 socket.io 의 [공식문서](https://socket.io/docs/v4)를 최대한 활용하였고, 이해가 가지 않은 부분은 velog, stackoverflow를 적극적으로 활용하여 공부했습니다.
- emit, on, join, to(in), disconnect 기능들을 이용해서 구현하고 싶었던 채팅방을 구현하게 되었습니다.
- react custom hooks를 이용하여 기능 구현을 할 때 최대한 재활용 가능한 컴포넌트를 만들기 위해 고민을 하게 되었습니다.
- styled-components 를 처음 사용해보았습니다.
