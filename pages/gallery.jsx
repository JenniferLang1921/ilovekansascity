import { FaInstagram } from "react-icons/fa";

export default function gallery({ instagramPosts }) {
  const images = instagramPosts.data;

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-full h-full bg-white flex flex-col justify-between">
        <div className="mx-auto w-25">
          <h1 className="text-center mt-6 pt-20 mx-12 text-3xl ">
            Instagram Gallery
            <div className="float-right pl-3 pt-1 align-bottom text-2xl hover:text-gray-400">
              <a href="https://www.instagram.com/livelovekansascity/">
                <FaInstagram />
              </a>
            </div>
          </h1>
        </div>
        <div className="border-b-4 border-red-900 w-1/3 mx-auto p-2 mb-8"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 px-2 py-10 text-center">
        {images.map((images) => {
          if (images.media_type === "VIDEO")
            return (
              <div key={images.id}>
                <video className="object-cover h-100 w-100" controls>
                  <source src={images.media_url} />
                </video>
              </div>
            );
          else images.media_type === "IMAGE";
          return (
            <div key={images.id}>
              <img
                className="object-cover h-100 w-100"
                src={images.media_url}
                alt={images.caption}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
{
  /*server side props is necessary because instagram videos are timestamped and expire*/
}
export const getServerSideProps = async () => {
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
