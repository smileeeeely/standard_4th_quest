import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
//   console.log("params", params);

  const pages = [{ id: 1, page: "test" }];

  const targetPage = pages.find(function (page) {
    return page.id === Number(params.id);
  });
//   console.log("targetPage", targetPage);

  return (
    <div>
      <h1>현재 페이지는 {targetPage.page}입니다</h1>
      {pages.map((page) => {
        return (
            console.log('page.id',page.id)
        );
      })}
    </div>
  );
};

export default Detail;
