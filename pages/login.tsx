import Head from "next/head";
import Navbar from "../components/navbar";
import Login from "../components/login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Medusa Multi-Vendor</title>
        <meta
          name="description"
          content="Medusa Multi-Vendor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Login />
    </>
  );
}