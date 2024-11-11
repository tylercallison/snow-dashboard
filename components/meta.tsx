import Head from "next/head";
import { useRouter } from "next/router";

const BASE_URL = "https://folsomlakemarina.com";

type MetaProps = {
  title: string;
  description: string;
  robots: boolean;
  keywords: string;
};

const Meta = ({ title, description, robots, keywords }: MetaProps) => {
  const router = useRouter();
  const shouldIndex = robots ? "index, follow" : "noindex";
  const [href] = new URL(BASE_URL + router.asPath).toString().split("?");

  return (
    <Head>
      <title>{`${title} | Folsom Lake Marina`}</title>
      <meta
        key="robots"
        name="robots"
        property="robots"
        content={shouldIndex}
      />
      <link key="canonical" rel="canonical" href={href} />
      <meta
        key="viewport"
        name="viewport"
        property="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <meta
        key="description"
        name="description"
        property="description"
        content={description}
      />
      <meta
        key="keywords"
        name="keywords"
        property="keywords"
        content={keywords}
      />
    </Head>
  );
};

export default Meta;
