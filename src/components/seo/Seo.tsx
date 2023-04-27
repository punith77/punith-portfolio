import Head from "next/head";
interface SeoProps  {
  pageTitle: string
}
const Seo = ({ pageTitle }: SeoProps) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Punith Chirumamilla Personal Portfolio}`}
      </title>
    </Head>
  </>
);

export default Seo;
