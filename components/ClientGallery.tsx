"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageProps {
  id: number;
  height: number;
  width: number;
  public_id: string;
  format: string;
  category?: string;
  blurDataUrl?: string;
}

interface Props {
  folder: string;
}

const ClientGallery: React.FC<Props> = ({ folder }) => {
    console.log(folder);
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    fetchImagesByFolder(folder);
  }, [folder]);

  const fetchImagesByFolder = async (folder: string) => {
    try {
      const res = await fetch(
        `/api/images?folder=${encodeURIComponent(folder)}`
      );
      const data = await res.json();

      if (data.length > 0) {
        const blurDataUrlPromises = data.map((image: ImageProps) =>
          fetch(
            `/api/getBlurDataUrl?image=${encodeURIComponent(image.public_id)}`
          )
            .then((res) => res.json())
            .then((json) => json.blurDataURL)
        );
        const blurDataUrls = await Promise.all(blurDataUrlPromises);

        const formattedData = data.map((result: ImageProps, i: number) => ({
          id: i,
          height: result.height,
          width: result.width,
          public_id: result.public_id,
          format: result.format,
          category: result.category,
          blurDataUrl: blurDataUrls[i],
        }));

        setImages(formattedData);
      } else {
        setImages([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="gallery">
      {images.map(({ id, public_id, format, blurDataUrl }) => (
        <div key={id} className="gallery-item">
          <Image
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
            alt=""
            placeholder="blur"
            blurDataURL={blurDataUrl}
            width={1000}
            height={1500}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
};

export default ClientGallery;
