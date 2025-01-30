import Layout from "../components/layout";

export default function ProductivityApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
