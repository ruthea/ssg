import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await getPosts();
  {
    posts.map((poster) => {
      console.log("stufffy", poster.title);
    });
  }
  console.log("index staticprops", posts);
  return { props: { posts } };
}

function HomePage({ posts }) {
  console.log("homepage render:", posts);
  return (
    <>
      <Head>
        <title>my Cool blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>my blog articles</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
export default HomePage;
