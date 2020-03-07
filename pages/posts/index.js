import Link from 'next/link';

const Posts = () => {
  return (
    <div>
      <h1>Dynamic Links</h1>
      <p>The link below is a dynamic Next.js link.</p>

      <h1>Posts Catalogue</h1>

      <p>
        {/* 
            Visit 
            https://iJS.to
            learn more about dynamic routes
        */}
        <Link href="/p/[name]" as="/p/everybody-writes">
          <a>1. Everybody Writes</a>
        </Link>
      </p>
    </div>
  );
};

Posts.getInitialProps = async ({ query }) => {
  // Visit https://iJS.to to learn how to use fetch in getInitialProps

  return { query };
};

export default Posts;
