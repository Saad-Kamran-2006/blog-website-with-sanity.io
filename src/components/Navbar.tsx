import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className=" flex items-center justify-between xs:flex-row py-2 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className=" flex md:flex md:items-center md:justify-center md:gap-x-24 font-bold uppercase">
        <Link href={"/"} className="text-3xl text-dark dark:text-light">
          DEV<span className="text-3xl text-accentDarkPrimary">LAB</span>
        </Link>
        {/* <Link href={"/blogs"} className="bg-accentDarkSecondary px-4 py-1 rounded-lg text-dark ">Blogs</Link> */}
      </nav>
      <div className="flex justify-center items-center h-16 gap-10">
        <Link
          href={"/blogs/lifestyle"}
          className="hover:underline active:scale-[.97] text-dark dark:text-light">
          Lifestyle
        </Link>
        <Link
          href={"/blogs/food-and-cooking"}
          className="hover:underline active:scale-[.97] text-dark dark:text-light">
          Food & Cooking
        </Link>
        <Link
          href={"/blogs/fashion-and-beauty"}
          className="hover:underline active:scale-[.97] text-dark dark:text-light">
          Fashion & Beauty
        </Link>
        <Link
          href={"/blogs/technology"}
          className="hover:underline active:scale-[.97] text-dark dark:text-light">
          Technology
        </Link>
        <Link
          href={"/blogs/travel"}
          className="hover:underline active:scale-[.97] text-dark dark:text-light">
          Travel
        </Link>
      </div>
      <ThemeToggle />
    </header>
  );
}
