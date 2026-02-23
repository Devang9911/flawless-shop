import Image from "next/image";
import Link from "next/link";
import Heromain from "@/public/images/hero-main.jpg";

export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center">
      
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Elevate Your Style With{" "}
          <span className="text-gray-500">FlawLess</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg">
          Discover premium fashion collections designed for confidence and comfort.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            href="/men"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition text-center"
          >
            Shop Men
          </Link>

          <Link
            href="/women"
            className="border px-6 py-3 rounded-md hover:bg-gray-100 transition text-center"
          >
            Shop Women
          </Link>
        </div>
      </div>

      <div className="hidden lg:block relative w-full h-75 sm:h-100 lg:h-130">
        <Image
          src={Heromain}
          alt="Hero"
          fill
          priority
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
