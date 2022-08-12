import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query
  console.log(article);
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <div class="container  mx-auto">
        <h1 className="text-center pt-60 mx-12 text-3xl ">{article.title}</h1>
        <div className="border-b-4  border-red-900 w-1/3 mx-auto p-2 mb-8"></div>
        <p>{article.body}</p>
        <p>{article.website}</p>
        <p>{article.tags}</p>
        <br />
        <Link href="/">Go Back</Link>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

//export const getStaticPaths = async () => {
// const res = await fetch(`${server}/api/articles`)

//const articles = await res.json()

// const ids = articles.map((article) => article.id)
// const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//return {
//  paths,
//  fallback: false,
// }
//}

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

export default article;
