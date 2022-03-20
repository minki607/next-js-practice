import { useEffect, useState } from "react";
import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import photoStyles from "../styles/Photos.module.css";
import Link from "next/link";
import { getPhotosFromDB } from "./api/photos";

const Photos = ({ photos }) => {
  // const [photos, setPhotos] = useState([]);
  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     const res = await fetch("/api/photos");
  //     const { photos } = await res.json();
  //     setPhotos(photos);
  //   };
  //   fetchPhotos();
  // }, []);

  return (
    <div>
      <HeadInfo title="My Blog Photos" />
      <h1>photos</h1>
      <ul className={photoStyles.photos}>
        {photos?.map((photo) => {
          return (
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                <a>
                  <Image
                    src={photo.thumbnailUrl}
                    width={100}
                    height={100}
                    alt={photo.title}
                  />
                </a>
              </Link>
              <span>{photo.title}</span>
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const photos = getPhotosFromDB();
  return {
    props: {
      photos,
    },
  };
};

export default Photos;
