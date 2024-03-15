import BlogList from "@/app/components/BlogList";
import Link from "next/link";
import React from "react";
import IMage from "./image/page";
import "./blog.css";

export default function BlogDetails({ params }: { params: { id: number } }) {
  {
    return (
      <div className="blog">
        <BlogList />
        <Link href={`/blog/${params.id}/image`}>
          <IMage />
        </Link>
      </div>
    );
  }
}
