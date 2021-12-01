import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import photoStyles from "../styles/Photos.module.css";
import Link from "next/link";

const photos = ({ photos }) => {
  return (
    <div>
      <HeadInfo title="My Blog Photos" />
      <h1>photos</h1>
      <ul className={photoStyles.photos}>
        {photos.map((photo) => {
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
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
  };
};

export default photos;
