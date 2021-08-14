import PostWriteForm from 'components/PostWriteForm';
import useHandlePost from 'hooks/post/useHandlePost';

const PostUpload = () => {
  const { onCreate } = useHandlePost();
  return (
    <div>
      <PostWriteForm onSubmit={onCreate} />
    </div>
  );
};

export default PostUpload;
