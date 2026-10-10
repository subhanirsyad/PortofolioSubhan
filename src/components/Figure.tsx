import Image from "next/image";
import type { Figure as FigureData } from "@/lib/data";

export default function Figure({
  figure,
  number,
  priority = false,
}: {
  figure: FigureData;
  number: number;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-[#1a2d4a] bg-white">
        <Image
          src={figure.src}
          width={figure.width}
          height={figure.height}
          alt={figure.alt}
          sizes="(min-width: 1024px) 960px, 100vw"
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-sm text-[#6b7fa0]">
        <span className="font-semibold text-[#00d4ff]">Fig. {String(number).padStart(2, "0")}</span>{" "}
        {figure.caption}
      </figcaption>
    </figure>
  );
}
