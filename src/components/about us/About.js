import Image from "next/image";
import style from "./about.module.scss";

function About() {
  // const pageSub = `Biz insonlar rejalashtirgan ishlarimizni o'z vaqtida qilishni hoxlaymiz. 
  // Qancha yumushimizni erta yakunlasak  va bizning bisotimizda yana  ham qo'shimcha bo'sh vaqtimiz bo'lishini bilish hissiyotiga ega bo'lishimiz qanchalar yoqimli!😊`;
 
 const pageSub = `Biz insonlar rejalashtirgan ishlarimizni o'z vaqtida qilishni hoxlaymiz. 
 Qancha yumushimizni erta yakunlasak  va bizning bisotimizda yana  ham qo'shimcha bo'sh vaqtimiz bo'lishini bilish hissiyotiga ega bo'lishimiz qanchalar yoqimli! 😊. 
 1 SONIAning afzalliklari:
 Vaqtni tejash maqsadida ehtiyoji bor mavjud kategoriyalar tizimiga online bog'lanish.
 Masalan  shifokorlar kategoriyasida:
   •	Shifoxonadagi tartibsiz  va turnaqator navbatlarga barham berishi;
 •	Ommaviy foydalanuvchi dastur bo’lganligi sababli, shifokorlarning bebaho xizmatiga ehtiyoji bor insonlarni xabardor qilish; 
 •	Shifokor Qabuliga yozib, tasdiqlagan bemorlarining ro’yxatini  shaxsiy accountidan ko’ra olish, bog’lanish va qabul kunini o’zgartirishi.
 •	Imtiyozlaridan masofadan turib omma  xabardor  bo’lishi;
 •	Kunlik grafik tartibni bemorlar  ko’ra olish, oldindan band qilish va bekor qilish funksiyalari;
 `
 
 


  const pageTitle = "BIZ HAQIMIZDA…";

  const img = require("../../../pages/images/main-section/about-icon.svg");
  const imgText =
    "1 SONIA Jamiyatda  uchratadigan va ko'p vaqt sarflanadigan mavjud tarmoqli muammolarga intelektual elektronik yechim beradi.";

  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>{pageTitle} </h1>
            <p className={style.subtitle}>{pageSub} </p>
          </div>
          <div className={style.wrapper}>
            <div className={style.imgWrapper}>
              <Image src={img} alt="image" className={style.aboutImg} />
            </div>
            <p>{imgText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
