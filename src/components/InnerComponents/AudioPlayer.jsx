// @ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Format time function
  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Load metadata (duration)
  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => setDuration(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  // Play / Pause toggle
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="rounded-2xl  overflow-hidden shadow-md p-2 mb-8 bg-white/80 w-full">
      <div className="flex items-center space-x-3 w-full">
        {/* Play / Pause button */}
        <button
          onClick={togglePlay}
          style={{ backgroundColor: "#6E4A27" }}
          className="text-white rounded-full p-2 shadow-md hover:scale-105 transition-transform"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>

        {/* Progress bar + time */}
        <div className="flex-1">
          <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-1"
              style={{
                width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                backgroundColor: "#6E4A27",
              }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-gray-700 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Audio source */}
        <audio ref={audioRef}>
          <source src="/audio/Demo-Audio.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
