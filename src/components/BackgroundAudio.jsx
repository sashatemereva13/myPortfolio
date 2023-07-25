import React, { useEffect, useState } from "react";
import styles from "./BackgroundAudio.module.css";
import "../lightDarkThemes.css";

const BackgroundAudio = ({ audio }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  useEffect(() => {
    const audioElement = new Audio(audio);
    audioElement.loop = true;

    if (isAudioPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    return () => {
      audioElement.pause();
    };
  }, [audio, isAudioPlaying]);

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div className={styles.audioContainer}>
      <h3 className={styles.audioLabel}> Audio ON/OFF</h3>
      <div className={styles.toggleWrapper}>
        <button
          className={`${styles.toggleButton} ${
            isAudioPlaying ? styles.on : styles.off
          }`}
          onClick={toggleAudio}
        >
          <span className={styles.slider} />
        </button>
      </div>
    </div>
  );
};

export default BackgroundAudio;
