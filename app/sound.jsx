// sound.jsx
import React, { useState } from "react";
import useSound from "use-sound";

const Sound = ({ isMuted, setIsMuted, sfx, volume, setVolume }) => {
  const [play] = useSound(sfx, { volume: isMuted ? 0 : volume });
  const [sliderValue, setSliderValue] = useState(69); // Initial volume: 0.69 * 100

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value / 100;
    setSliderValue(event.target.value);
    console.log(newVolume, "new volume");
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    console.log("is muted? ", isMuted);
  };

  return (
    <div className="flex items-center">
      <button
        className="z-10 text-slate-200 bg-slate-600 rounded-lg hover:bg-slate-300 transition-colors duration-200 p-1"
        onClick={() => {
          play();
          setIsMuted((prevMuted) => !prevMuted);
        }}
      >
        {isMuted ? "🔈" : "🔊"}
      </button>
      <input
        type="range"
        min="0"
        max="69"
        value={sliderValue}
        className="w-24 ml-2 bg-slate-600 rounded-lg"
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default Sound;
