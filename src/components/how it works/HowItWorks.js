import React from "react";
import Image from "next/image";
import style from "./howitworks.module.scss";
import { download_app } from "../../download_app";

function HowItWorks() {
  const pageTitle = "Dasturdan foydalanish uchun nima qilish kerak?";
  const arrowImg = {
    img: require("../../../pages/images/main-section/arrow-img.svg"),
  };
  const dataCards = [
    {
      img: require("../../../pages/images/main-section/avatar.svg"),
      id: 1,
      title: "Raqamingizni kiriting",
      sub: `Shaxsiy telefon raqamingizni kiriting hamda dastur imkoniyatlaridan  foydalanish huquqini to'laqonli qo'lga kiriting.`,
    },
    {
      img: require("../../../pages/images/main-section/avatar.svg"),
      id: 2,
      title: "Kerakli kategoriyani tanlang",
      sub: `Mavjud kategoriyalardan talabingizga mosini tanlang va qulay xizmatlar bazasidan mamnuniyat bilan foydalaning.`,
    },
  ];
  return (
    <section className={style.how}>
      <div className="container">
        <div className={style.content}>
          <h1 className={style.how__title}>{pageTitle}</h1>
          <div className={style.card__wrap}>
            <div className={style.card__real__wrap}>
              {dataCards.map((card, index) => {
                return (
                  <div className={style.card} key={index}>
                    <div className={style.img__div}>
                      <h3>0{card.id}</h3>

                    </div>
                    <div className={style.text__div}>
                      <p className={style.text__title}>
                        {card.title}
                      </p>
                      <p className={style.text__sub}>{card.sub}</p>
                    </div>
                  </div>
                );
              })}

              <div className={style.card}>
                <div className={style.text__div}>
                  <h1 className={style.text__title}>
                    Qani ketdik! Hoziroq yuklab oling!
                  </h1>
                  {download_app.map((item, index) => {
                    return (
                      <div className={style.download} key={index}>
                        <Image src={item.img} alt="image" width="170px" height="50px" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
