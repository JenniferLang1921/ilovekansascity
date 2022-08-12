import { server } from "../config";
import Hero from "../components/Hero";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Hero />
      <ArticleList articles={articles} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
