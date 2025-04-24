import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

export default function ServiceCard({ title, image, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}