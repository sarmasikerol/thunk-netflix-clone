import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import ReactPlayer from "react-player";

const VideoList = ({ videos }) => {
  // eğer filmin fragmanları yok sa bu bileşeni renderlama
  if (!videos) return;

  return (
    <div className="my-5">
      <h2 className="font-semibold text-xl md:text-xl">Fragmanlar</h2>

      <Splide options={{ pagination: false }}>
        {videos.map((video, key) => (
          <SplideSlide key={key}>
            <div className="w-full">
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                className="w-full h-[30vh] md:h-[50vh]"
                controls
                url={`https://www.youtube.com/watch?v=${video?.key}`}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default VideoList;
