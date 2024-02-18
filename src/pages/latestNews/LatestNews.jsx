import LatestNewsList from "./latestNewsList/LatestNewsList";

const latestNews = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Latest News</h1>
      <p className="text-center">See All Our Updated and Latest News</p>
      {/* <TeamList/> */}
      <LatestNewsList/>
    </div>
  );
};

export default latestNews;
