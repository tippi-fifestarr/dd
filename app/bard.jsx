import React, { useState } from "react";
import * as Tone from "tone";

const SomethingAboutUs = () => {
  const [bpm, setBPM] = useState(110);
  const [isPlaying, setIsPlaying] = useState(false);

  function playChords() {
    setIsPlaying(true);

    const chordProgression = [
      ["Bbmaj7", "Gm7", "Dm7", "Eb7"],
      ["Bbmaj7", "Gm7", "Dm7", "Eb7"],
      ["Bbmaj7", "Gm7", "Dm7", "Eb7"],
      ["Bbmaj7", "Gm7", "Dm7", "Eb7"],
      ["Bbmaj7", "Gm7", "Dm7", "Eb7"],
      ["Bbmaj7", "Gm7", "Dm7", "Eb7"],
      ["Bbmaj7", "Gm7", "Dm7", "Eb7"],
      ["Bbmaj7", "Gm7", "Dm7", "Eb7"],
    ];

    const synth = new Tone.Synth({
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.5,
        release: 0.8,
      },
      volume: -10,
    }).toDestination();

    synth.set("detune", Tone.intervalToFrequencyRatio(bpm - 110) * 100);

    const loop = new Tone.Loop((time) => {
      const currentChord =
        chordProgression[loop.iterations % chordProgression.length];
      synth.triggerAttackRelease(currentChord, "4n", time);
    }, "4n");

    Tone.Transport.bpm.value = bpm;
    Tone.Transport.start();
    loop.start(0);
  }

  function handleBPMChange(event) {
    setBPM(event.target.value);
  }

  return (
    <div>
      <h1>Something About Us</h1>
      <p>Adjust the BPM below to change the tempo of the song.</p>
      <input
        type="range"
        id="bpm"
        min="70"
        max="110"
        value={bpm}
        onChange={handleBPMChange}
      />
      <button onClick={playChords} disabled={isPlaying}>
        {isPlaying ? "Playing..." : "Play"}
      </button>
    </div>
  );
};

export default SomethingAboutUs;
