import Image from 'next/image'
import style from './footertop.module.scss'

function FooterTop() {

  const pageTitle = '1SONIA - manfaatli vaqt hududi!'
  const pageSubtitle = `Aziz xalqim uchun  hayotimizda uchraydigan muammolarga  yechimlar bazasini yaratishdan mamnunmiz va vaqtingizni  qadrlaymiz! 
  Ehtiyojingizni tezkorlikda toping va har kungidan koproq va foydali ishga ulguring! 🙂`
  const pageImg = require('../../../pages/images/main-section/footer-top.svg')
  return (
    <div className={style.footerTop}>
      <div className="container">
        <div className={style.content}>
          <div className={style.texts}>
            <h1 className={style.title}>
              {pageTitle}
            </h1>
            <p className={style.subtitle}>
              {pageSubtitle}
            </p>
            {/* <button className={style.btn}>Qo&#39;ng&#39;iroq qiling</button> */}
          </div>
          <div className={style.imageBox}>
            <Image src={pageImg} alt='image' className={style.img}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop