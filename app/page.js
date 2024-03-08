import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="text-lg">next js 14 crash course</div>
      <ul className="mt-5">
        <li>
          <Link href={`/blog`}>blog</Link>
          <Link href={`/post`}>post</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
