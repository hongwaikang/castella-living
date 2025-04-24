import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  image: string;
  link: string;
}

export default function ProductCard({ title, image, link }: ProductCardProps) {
  return (
    <Link href={link} className="block group">
      <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="object-cover w-full h-64 group-hover:scale-105 transition-transform"
        />
        <div className="p-4 bg-white">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}