/* eslint-disable @next/next/no-img-element */
import type { Project } from "@/lib/data";

// Real project images arranged with CSS (see .thumb in globals.css).
// browser: screenshot in a window. display: wide chart mounted on a tilted white card.
export default function Mockup({ mockup }: { mockup: NonNullable<Project["mockup"]> }) {
  const [a, b, c] = mockup.images;

  return (
    <div className={`thumb thumb--${mockup.style}`} aria-hidden="true">
      {mockup.style === "browser" && (
        <span className="frame">
          <span className="frame__bar">
            <i />
            <i />
            <i />
          </span>
          <img src={a} alt="" loading="lazy" />
        </span>
      )}

      {mockup.style === "display" && (
        <span className="frame">
          <img src={a} alt="" loading="lazy" />
        </span>
      )}

      {mockup.style === "poster" && (
        <>
          <img className="thumb__back" src={b} alt="" loading="lazy" />
          <img className="thumb__poster" src={a} alt="" loading="lazy" />
        </>
      )}

      {mockup.style === "fan" &&
        [a, b, c].map((src, i) => (
          <img
            key={src}
            className="fan__item"
            style={{ "--i": i - 1, zIndex: i === 1 ? 2 : 1 } as React.CSSProperties}
            src={src}
            alt=""
            loading="lazy"
          />
        ))}
    </div>
  );
}
