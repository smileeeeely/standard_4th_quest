import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to={"/detail/1"}>detail 페이지로 이동하기</Link>
    </>
  );
};

export default Home;
