import { server } from "../config";
import Link from "next/link";
import Hero from "../components/Hero";
import BlogList from "../components/BlogList";

export default function Home({ /*articles,*/ instagramPosts }) {
  const images = instagramPosts.data;

  return (
    <div>
      <Hero />
      <BlogList />
      <div className="max-w-[1200px] mx-auto">
        <Link href="/thingstodoinkc">
          <p className="p-2 mb-4 hover:text-red-900 hover:underline float-right">
            More Things To Do In KC →
          </p>
        </Link>
      </div>
      {/*<ArticleList articles={articles} />*/}
      <div className="max-w-[1200px] mx-auto">
        <h2 className="pt-40 mx-8 text-2xl ">Gallery</h2>
        <div className="border-b-4  border-red-900 w-1/5 mx-6 p-2 mb-8"></div>
        <div className="grid md:grid-cols-4 gap-20 px-2 py-10 text-center">
          {images.map((images) => {
            if (images.media_type === "VIDEO")
              return (
                <div key={images.id}>
                  <video className="object-cover h-80 w-80" controls>
                    <source src={images.media_url} />
                  </video>
                  <p>{images.caption}</p>
                </div>
              );
            else images.media_type === "IMAGE";
            return (
              <div key={images.id}>
                <img
                  className="object-cover h-80 w-80"
                  src={images.media_url}
                />
                <p>{images.location_id}</p>
                <p>{images.caption}</p>
              </div>
            );
          })}
        </div>
        <Link href="/gallery">
          <p className="p-2 mb-4 hover:text-red-900 hover:underline float-right">
            More Gallery Photos →
          </p>
        </Link>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  {
    /* const res = await fetch(`${server}/api/articles`);
const articles = await res.json(); */
  }

  const instagramPosts = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,caption,permalink,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}&limit=4`
  ).then((r) => r.json());

  return {
    props: {
      instagramPosts,
    },
  };
};
