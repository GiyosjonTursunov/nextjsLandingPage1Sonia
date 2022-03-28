
import Image from 'next/image'
import style from './mytello.module.scss'

function MyTello() {

  const btn = 'Start your free call now'
  const pageTitle = 'Xo’sh, nima uchun aynan  1 SONIA?!'
  const cards = [
    {
      // cardAvatar: require('../../../pages/images/main-section/myTello-avatar.svg'),
      cardAvatar: require('../../../pages/images/main-section/med.svg'),
      title: 'Meditsina',
      sub: `Ko'p sonli bemorlarning og'riqli nuqtalarini inobatga olgan holda ishlab chiqilgan bu kategoriya, ishonchli va tajribali shifokorlarni o'z ichiga oladi. Kunlik grafik tartibida qabuliga yozilish imkoni hamda ular haqida batafsil ma'lumotlar bazasini ko'rish mumkin. Biz siz uchun qayg'uramiz...!`,
    },
    {
      cardAvatar: require('../../../pages/images/main-section/restaurant.svg'),
      title: 'Restoran',
      sub: `Barcha xohlagan va kutgan foydali ko'p funksiyalarga ega bo'lgan ushbu kategoriyada atrofdagi barcha diqqatga sazovor restoranlarning joylashuvi, dasturxonga tortiladigan shirin taomlarning narxi va ro'yxatini qamrab olgan. O'z dasturxoningizni masofadan bezating va tashrif buyurib tanavvul qiling. Yoqimli ishtaxa!  🙂`,
    },
    {
      cardAvatar: require('../../../pages/images/main-section/auto.svg'),
      title: 'Avto',
      sub: `Yo'l o'rtasida moshinagiz pand berdi!  Yordam kutish juda noqulay vaziyat tog'ri-a?!
      Kayfiyatingizni ko'taring 🙂
      Qo'lingizga smartfoningizni olingda, tajribali ustalar joylashgan avtoservislarni toping...
      Moyingizni almashtirib, yuvintirish ham esdan chiqmasin. Oq yo'l! 🙂`,
    },
 
  ]

  return (
    <section className={style.mytello}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>{pageTitle} </h1>
          </div>
          <div className={style.cards}>
            {cards.map((card, index) => {
              return (
                <div className={style.card} key={index}>
                  <div className={style.image__box}>
                    <Image src={card.cardAvatar} alt='image' height="100px" width="100px" />
                  </div>
                  <h3 className={style.cardTitle}>{card.title} </h3>
                  <p className={style.cardSubtitle}>{card.sub}</p>
                </div>
              )
            })}
          </div>
          <button className={style.btn}>{btn}</button>
        </div>
      </div>
    </section>
  )
}

export default MyTello