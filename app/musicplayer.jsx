"use client";
import { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
// import frozen from "../public/music/frozen.mp3";

export default function MusicPlayer({ src }) {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);
  console.log(src);
  const toggleMute = () => {
    const newIsMuted = !isMuted;
    setIsMuted(newIsMuted);
    audioRef.current.muted = newIsMuted;
  };

  return (
    <div className="flex items-center">
      <audio ref={audioRef} loop>
        {/* <source src="/music/frozen.mp3" type="audio/mpeg" /> */}
        {/* <source src={frozen} /> */}
        <source src={src} type="audio/mpeg" />
      </audio>
      {isMuted ? (
        <button
          className="z-10 text-slate-100 bg-slate-400 rounded-lg hover:bg-slate-300 p-1"
          onClick={toggleMute}
        >
          music on
          <FaVolumeMute />
        </button>
      ) : (
        <button
          className="z-10 text-slate-100 bg-slate-400 rounded-lg hover:bg-slate-300 p-1"
          onClick={toggleMute}
        >
          music off
          <FaVolumeUp className=" items-center" />
        </button>
      )}
    </div>
  );
}
