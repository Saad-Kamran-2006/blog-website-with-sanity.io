import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { customStyle } from "@/components/CustomStyle";
import { convertSpaceToHyphen } from "@/components/regex";

export const revalidate = 10; //seconds

export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  // console.log(slugs)
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);
  // console.log(slugRoutes)
  return slugRoutes.map((slug: string) => ({ slug }));
}

// To create static pages for dynamic routes
export default async function page({ params }: Param) {
  // console.log(params.slug)
  const query = `*[_type=='post' && slug.current=="${params.slug}"]{
    title,
      image,
      summary,
      description,
      author->{authorName,authorBio,authorImage}
  }[0]`;
  const blog = await client.fetch(query);
  // console.log(blog)
  const blogImage = urlForImage(blog.image);
  const authorImage = urlForImage(blog.author.authorImage);
  const slug = convertSpaceToHyphen(blog.author.authorName);
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-10">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-[2.5rem] font-bold text-dark dark:text-light">
        {blog.title}
      </h1>

      {/* Featured Image */}
      <div className="w-full flex justify-center">
        <Image
          src={blogImage}
          width={500}
          height={500}
          alt="AI for everyone"
          className="object-contain rounded h-[65vh] w-[65vw] self-center"
        />
      </div>

      {/* Blog Summary Section */}
      <section className="space-y-5">
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {blog.description}
        </p>
      </section>

      {/* Main Body of Blog */}
      <section
        className="prose-li:list-disc prose-li:marker:text-orange-600 prose-li:list-inside prose-strong:font-semibold "
        //   className="text-lg leading-normal text-dark/80 dark:text-light/80
        // prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
        // prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
        // prose-strong:text-dark dark:prose-strong:text-white
        // "
      >
        <PortableText
          value={blog.summary}
          // components={customStyle}
        />
      </section>
      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Link href={`/blogs/${slug}`}>
          <Image
            src={authorImage}
            width={800}
            height={500}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
        </Link>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">
            {blog.author.authorName}
          </h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {blog.author.authorBio}
          </p>
        </div>
      </section>
    </article>
  );
}
