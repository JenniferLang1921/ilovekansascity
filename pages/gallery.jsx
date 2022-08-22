import React from "react";

export default function gallery({ feed }) {
  return <div>gallery</div>;
}

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,caption,permalink,timestamp&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed,
    },
  };
};
