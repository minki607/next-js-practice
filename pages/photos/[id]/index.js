import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Photo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetch(`/api/photos/${id}`);
      const { photo } = await res.json();
      setPhoto(photo);
    };
    fetchPhoto();
  }, [id]);

  return (
    <div>
      <h2>{photo?.title}</h2>

      {photo?.thumbnailUrl && (
        <Image
          src={photo?.thumbnailUrl}
          width={500}
          height={500}
          alt={photo?.title}
        />
      )}

      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
};

// export const getStaticProps = async (context) => {
//   const { id } = context.params;
//   const photo = getPhotoFromDB(id);
//   return {
//     props: {
//       photo,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
//   );
//   const photos = await res.json();
//   const ids = photos.map((photo) => photo.id);
//   const paths = ids.map((id) => {
//     return {
//       params: { id: id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Photo;
