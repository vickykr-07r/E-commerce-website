import Style from "../Component/Background.module.css";

import image0 from "../assets/2780c6160456a20f4c05c9488c390e47.jpg";
import image1 from "../assets/50622dba26ed1bbcfe5542ea62015fa4.jpg";
import image2 from "../assets/c729bbe8cb6fb8a30a609924535e78f4.jpg";
import image3 from "../assets/f8d34b010d4153f0a7d56152d9580cc0.jpg";

function Background({ heroCount }) {
  const images = [image0, image1, image2, image3];

  return (
    <div className={Style.Backgroundimage}>
      <img src={images[heroCount]} alt="background" />
    </div>
  );
} 

export default Background;