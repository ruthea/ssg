
import Head from "next/head";
import NavBar from "../components/NavBar";

function AboutPage() {
  console.log("homepage render");
  return (
    <>
    <Head>
        <title>About - my blog</title>
    </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}
export default AboutPage;
