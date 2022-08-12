import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <div className="border py-8 mt-2 rounded-xl shadow-xl">
      <p className="text-2xl text-red-900">
        <Link href={`/article/${article.id}`}>
          <a>
            <h3>{article.title} </h3>
          </a>
        </Link>
      </p>
    </div>
  );
};

export default ArticleItem;
