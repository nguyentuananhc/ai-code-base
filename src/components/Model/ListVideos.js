import React from "react";
import VideoItem from "./VideoItem";

const ListVideos = () => {
  return <div className="w-full">{Array(10).fill(<VideoItem />)}</div>;
};

export default ListVideos;
