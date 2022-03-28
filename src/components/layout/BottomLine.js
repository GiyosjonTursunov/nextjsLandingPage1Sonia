import Image from 'next/image'
import style from '../../styles/bottom-line.module.scss'

function BottomLine() {
  const data = [
    {
      img: require('../../../pages/images/header-section/img-background.svg'),
      text: ' Qulay vaqt reglamenti'
    },
    {
      img: require('../../../pages/images/header-section/img-background.svg'),
      text: `Ehtiyojingizga yo'l`
    },
    {
      img: require('../../../pages/images/header-section/img-background.svg'),
      text: `Eng qisqa masofa`
    },
    {
      img: require('../../../pages/images/header-section/img-background.svg'),
      text: `Aniq "Gonarar"`
    },
  ]

  








  

  return (
    <div className={style.background__color}>
      <div className='container'>
        <div className={style.flex}>
        {data.map((item, index) => {
          return (
            <div key={index} className={style.box}>
              <Image src={item.img} alt='image' height="39px" width="39px" />
              <p className={style.text}>
                {item.text}
              </p>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default BottomLine