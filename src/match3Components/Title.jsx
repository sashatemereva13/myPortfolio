import cosmicAudio from "./cosmicAudio.mp3";
import AudioMatch3 from "./AudioMatch3";

const Title = () => {
  return (
    <div className="title">
      <h1 className="match3game-heading"> Match-3 Cosmos-Style</h1>
      <AudioMatch3 audio={cosmicAudio} />
    </div>
  );
};

export default Title;
