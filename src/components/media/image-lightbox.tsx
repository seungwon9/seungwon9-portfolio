"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
};

export function ImageLightbox({ src, alt, width, height, eager = false }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        className="media-zoom-trigger"
        type="button"
        aria-label={`${alt} 확대해서 보기`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
        />
        <span className="media-zoom-icon" aria-hidden="true">⌕</span>
      </button>
      {open ? (
        <div
          className="media-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} 확대 이미지`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <button
            ref={closeRef}
            className="media-lightbox-close"
            type="button"
            aria-label="확대 이미지 닫기"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <Image
            className="media-lightbox-image"
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
          />
        </div>
      ) : null}
    </>
  );
}
