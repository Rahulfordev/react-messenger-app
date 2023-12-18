import AddIcon from "@mui/icons-material/Add";
import CollectionsIcon from "@mui/icons-material/Collections";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

const Input = () => {
  return (
    <div className="input">
      <div className="input__container">
        <div className="input__container--left__icon">
          <AddIcon
            sx={{
              color: "black",
              backgroundColor: "#0083fc",
              borderRadius: "50%",
            }}
          />
          <CollectionsIcon
            sx={{
              color: "#0083fc",
              borderRadius: "50%",
            }}
          />
          <GifBoxIcon
            sx={{
              color: "#0083fc",
              borderRadius: "50%",
            }}
          />
          <KeyboardVoiceIcon
            sx={{
              color: "#0083fc",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="input__container--input">
          <input type="text" placeholder="Aa" />
          <EmojiEmotionsIcon
            sx={{
              color: "#0083fc",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="input__container--thum">
          <ThumbUpIcon
            sx={{
              color: "#0083fc",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
