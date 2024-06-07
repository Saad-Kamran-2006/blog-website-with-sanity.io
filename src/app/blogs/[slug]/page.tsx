import BlogCard from "@/components/BlogCard";
import { client } from "../../../../sanity/lib/client";
import { convertHyphenToSpace } from "@/components/regex";

export default async function Home({ params }: Param) {
  // console.log(params.slug)
  const slug = convertHyphenToSpace(params.slug);
  // console.log(slug)
  const authorName = convertHyphenToSpace(params.slug);
  // console.log(authorName);
  const query = `*[_type == "post" && category._ref in *[_type=="category" && categoryName=="${slug}" ]._id || author._ref in *[_type=="author" && authorName=="${authorName}" ]._id ]{
title,
  image,
  description,
  'slug': slug.current,
  category->{description,categoryName,image}
}`;
  //   const query = `*[_type == "post" && category._ref in *[_type=="category" && categoryName=="${slug}"]._id ]{
  // title,
  //   image,
  //   description,
  //   'slug': slug.current,
  //   category->{description,categoryName,image}
  // }`;
  const categoryBlogs: Blog[] = await client.fetch(query);
  //   console.log(categoryBlogs);
  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        {slug}
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categoryBlogs.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.slug} />
        ))}
      </section>
    </main>
  );
}
