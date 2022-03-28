// import Image from "next/image";
import Image from "next/dist/client/image";

import style from "../../styles/header-content__right.module.scss";

function Header() {
  const iya = require("../../../pages/images/header-section/aaaaaaaa.png");
  const iphone_image = require("../../../pages/images/header-section/iphone.png");
  const fakeIphone_image = require("../../../pages/images/main-section/iphone-icon.svg");

  return (
    <div className={style.right}>
      <div className={style.image}>
        {/* <div className={style.block}> */}
          <Image src={iya} alt="image" />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;
