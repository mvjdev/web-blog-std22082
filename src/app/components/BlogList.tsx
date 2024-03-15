import Link from "next/link";
import "./bloglist.css";
export default function BlogList() {
  type Blog = number;
  const bloglist: Blog[] = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div>
        <ul>
          {bloglist.map((blog) => (
            <li key={blog} className="list">
              <Link href={`/blog/${blog}`}> {blog}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
