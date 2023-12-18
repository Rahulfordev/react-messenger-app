import AddIcon from "@mui/icons-material/Add";
import CollectionsIcon from "@mui/icons-material/Collections";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Input = () => {
  return (
    <div className="input">
      <div>
        <AddIcon />
        <CollectionsIcon />
        <GifBoxIcon />
        <input type="text" placeholder="Aa" />
        <EmojiEmotionsIcon />
        <ThumbUpIcon />
      </div>
    </div>
  );
};

export default Input;
