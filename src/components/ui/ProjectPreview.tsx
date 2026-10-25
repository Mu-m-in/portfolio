"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectPreviewProps {
  image?: string;
  name: string;
  category: string;
}

export default function ProjectPreview({ image, name, category }: ProjectPreviewProps) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const showImage = image !== undefined && failedImage !== image;

  return (
    <div className="relative aspect-4/3 min-h-72 overflow-hidden bg-[#0c1117] lg:aspect-auto lg:h-full">
      {showImage ? (
        <Image
          src={image}
          alt={`${name} project preview`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          onError={() => setFailedImage(image)}
        />
      ) : (
        <div
          role="img"
          aria-label={`${name}, ${category} project preview`}
          className="relative flex h-full min-h-72 flex-col justify-between overflow-hidden bg-linear-to-br from-[#101722] via-surface to-[#171427] p-6 sm:p-8"
        >
          <div aria-hidden className="absolute -right-16 -top-20 size-64 rounded-full bg-accent/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-28 -left-12 size-64 rounded-full bg-violet/10 blur-3xl" />
          <div className="relative flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Project preview</span>
          </div>
          <div className="relative">
            <div aria-hidden className="mb-5 flex items-center gap-2">
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
              <span className="ml-2 h-px flex-1 bg-line" />
            </div>
            <p className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{name}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
