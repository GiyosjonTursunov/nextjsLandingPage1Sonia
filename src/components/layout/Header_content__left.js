import Image from "next/image";
import Link from "next/link";
import style from "../../styles/header-content_left.module.scss";

function Header_content__left() {
  const title = "Endi sizda   1 SONIA   bor!";
  const sub =
    "1 SONIA dasturi sizni shaxsiy karyerangiz tomon maksimal o’sish maydoniga uloqtiradi!💣  ";
  const imgSrc = [
    {
      img1: require("../../../pages/images/header-section/play-button.svg"),
      img2: require("../../../pages/images/header-section/free-icon.svg"),
    },
  ];
  const download = {
    img1: require("../../../pages/images/main-section/google-play.svg"),
    img2: require("../../../pages/images/main-section/app-store.svg"),
  };

  return (
    <div className={style.wrap}>
      <h1 className={style.title}> {title} </h1>
      <p className={style.subtitle}>{sub} </p>
      <div className={style.play}>
        <div className="image">
          <Image src={imgSrc[0].img1} alt="image" height="90" width="90" />
        </div>
        <span> 👈Bilmaganlaringiz shu yerda</span>
      </div>
      <div className={style.wrapper}>
        <div className={style.box}>
          <div className={style.download__box}>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=uz.sonia1.soniaapp"
              }
            >
              <a target={"_blank"}>
                <Image
                  src={download.img1}
                  alt="image"
                  width="170"
                  height="50"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.download__box}>
            <Image src={download.img2} alt="image" width="170" height="50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_content__left;
