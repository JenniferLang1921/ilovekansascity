import React from "react";
import ArticleItem from "../components/ArticleItem";

export default function gallery({ instagramPosts }) {
  const images = instagramPosts.data;
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="grid md:grid-cols-3 gap-20 px-2 py-10 text-center">
        {images.map((images) => {
          return (
            <div key={images.id}>
              <img src={images.media_url} />
              <p>{images.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const instagramPosts = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,caption,permalink,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`
  ).then((r) => r.json());

  console.log(instagramPosts);

  return {
    props: {
      instagramPosts,
    },
  };
};
