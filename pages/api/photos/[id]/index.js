import { getPhotosFromDB } from "../../photos";

export default function photoHandler(request, response) {
  const {
    method,
    query: { id },
  } = request;

  if (method === "GET") {
    const photo = getPhotosFromDB(id);
    return response.status(200).json({
      photo,
    });
  }
}
