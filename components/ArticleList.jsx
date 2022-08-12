import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="grid md:grid-cols-3 gap-20 px-2 py-10 text-center">
        {articles.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
