"use client";
import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export default function BlockRenderer({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          const imageUrl = image.url.startsWith('http')
            ? image.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${image.url}`;

          return (
            <Image
              src={imageUrl}
              width={image.width || 800}
              height={image.height || 600}
              alt={image.alternativeText || ""}
              className="rounded-lg my-6"
            />
          );
        },
      }}
    />
  );
}
