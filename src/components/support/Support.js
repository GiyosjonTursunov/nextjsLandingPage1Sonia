import style from './support.module.scss'
import Image from 'next/image'


function Support() {

  const pageTitle = 'Savol va Takliflar bormi?'
  const pageSub = `Sizni o'ylantirgan barcha jumboqlarga ushbu tarmoq orqali javob beramiz.`

  const cards = [
    {
      img: require('../../../pages/images/header-section/review-profile-icon.svg'),
      title: `g1y0sb3k@gmail.com`,
      link: `https://gmail.google.com/gmail/g1y0sb3k@gmail.com`,
      sub: 'Biz bilan gmail orqali bog\'lanish'
    },
    {
      img: require('../../../pages/images/header-section/review-profile-icon.svg'),
      title: '@birsonia_bot',
      link: `https://t.me/birsonia_bot`,
      sub: 'We have a live chat to help you'
    },
  ]

  return (
    <section className={style.support}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>
              {pageTitle}
            </h1>
            <p className={style.sub}>
              {pageSub}
            </p>
          </div>
          <div className={style.cards}>
            {cards.map((item, idx) => {
              return (
                <div className={style.card} key={idx}>
                  <div className={style.cardImg}>
                    <Image src={item.img} alt='image' />
                  </div>
                  <div className={style.cardTexts}>
                    <a href={item.link} className={style.cardTitle} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                    <p className={style.cardSub}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support