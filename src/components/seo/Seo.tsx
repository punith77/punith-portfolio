import Head from "next/head";
interface SeoProps  {
  pageTitle: string
}
const Seo = ({ pageTitle }: SeoProps) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Bostami - Tailwind CSS  Personal Portfolio React Nextjs Template}`}
      </title>
    </Head>
  </>
);

export default Seo;
