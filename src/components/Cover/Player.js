import React, { useState, useRef } from "react";
import {
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { VscPlay, VscDebugPause } from "react-icons/vsc";

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return formattedTime;
}

function MP3Player({ url }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playPauseToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration); // Set the duration when metadata is loaded
  };

  return (
    <div className="flex items-center justify-center p-4 text-center bg-gray-200 rounded-lg">
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="flex items-center justify-center">
        <Icon
          onClick={playPauseToggle}
          boxSize={6}
          as={isPlaying ? VscDebugPause : VscPlay}
          className="mr-4"
        />
      </div>
      {/* <input
        type="range"
        min="0"
        max={audioRef.current && audioRef.current.duration}
        step="0.01"
        value={currentTime}
        onChange={(e) => handleSeek(e.target.value)}
        className="flex-1 w-ful"
      /> */}
      <Slider
        defaultValue={0}
        className="flex-1"
        value={currentTime}
        min={0}
        max={audioRef.current && audioRef.current.duration}
        step={0.01}
        aria-label="slider-ex-2"
        colorScheme="orange"
        onChange={(v) => handleSeek(v)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <div>
        <span className="ml-3 text-xs text-gray-500">
          {formatTime(currentTime)}/{formatTime(duration)}
        </span>
      </div>
    </div>
  );
}

export default MP3Player;
