import React from "react";
import endPoints from "../services/api";
import useFetch from "../hooks/useFetch";

const FeaturedImage = ({ id }) => {
  // const { data, loading, error } = useFetch(
  //     endPoints.image.imageById(id)
  //   );

  //   console.log(data)

  return (
    <>
      <img

      className="w-full"
        src={`https://picsum.photos/300/200.jpg?random=${id}`}
        alt={`https://picsum.photos/id/${id}/info`}
      />
    </>
  );
};

export default FeaturedImage;
