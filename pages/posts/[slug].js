import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  const slugs = await getSlugs();
  console.log("slugs====>", slugs);
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  console.log("[PostPage] getStaticProps():", slug);
  const post = await getPost(slug);

  return { props: post };
}

function FirstPostPage(post) {
  console.log("[PostPage] render", post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}
export default FirstPostPage;
