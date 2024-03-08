import Link from "next/link";

function BlogPage() {
    return (
        <div>
            <h2>Blog Page</h2>
            <ul className="mt-5">
                <li>
                    <Link href={`/blog/1`}>blog 1</Link>
                </li>
                <li>
                    <Link href={`/blog/2`}>blog 2</Link>
                </li>
                <li>
                    <Link href={`/blog/3`}>blog 3</Link>
                </li>
            </ul>
        </div>
    )
}

export default BlogPage;