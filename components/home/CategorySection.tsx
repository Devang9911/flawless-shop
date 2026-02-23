import Image from "next/image";
import Link from "next/link";
import HeroMen from "@/public/images/hero-men.jpg";
import HeroWomen from "@/public/images/hero-women.jpg";
import HeroAcc from "@/public/images/hero-acc.jpg";

const categories = [
  {
    name: "Men",
    src: HeroMen,
  },
  {
    name: "Women",
    src: HeroWomen,
  },
  {
    name: "Accessories",
    src: HeroAcc,
  },
];

export default function CategorySection() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Featured Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((item) => (
          <Link
            href={`/${item.name.toLowerCase()}`}
            key={item.name}
            className="text-white text-lg sm:text-xl font-semibold"
          >
            <div
              
              className="relative h-60 sm:h-64 group overflow-hidden rounded-xl"
            >
              <Image
                src={item.src}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
