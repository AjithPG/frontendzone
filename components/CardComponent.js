import Image from "next/image";

export default function CardComponent() {
  return (
    <div className="card bg-white w-full px-2 py-2 rounded-2xl">
      <Image
        src="/images/card_image.png"
        layout="responsive"
        width={286}
        height={226}
      />
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center py-3 md:py-4 px-4 gap-1">
        <p className="text-md w-full mb-3  md:w-auto md:mb-0">Button Components</p>
        <button className="py-2 px-3 text-sm bg-primary text-white rounded-sm self-center w-full md:w-auto">
          View
        </button>
      </div>
    </div>
  );
}
