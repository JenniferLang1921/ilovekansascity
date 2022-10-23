import Head from "next/head";
import Script from "next/script";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Things To Do in Kansas City",
  keywords: "events in KC, fun things to do in KC",
  description: "Kansas City's Best restaurant and travel blog",
};

export default Meta;
