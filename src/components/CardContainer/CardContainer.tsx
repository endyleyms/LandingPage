
import { useState } from "react"
import { useTranslation } from 'react-i18next';
import Card from "../Card/Card"
import './CardContainer.css'
import CardView from "../CardView/CardView"

const CardContainer = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState('')
  const handleClick = (id: string, arrayImages: string) => {
    setSelected(id)
    const randomIndex = Math.floor(Math.random() * arrayImages.length);
    setRandomImage(arrayImages[randomIndex]);
  }

  const [randomImage, setRandomImage] = useState("");

  const Brand = [
    'https://i.pinimg.com/474x/36/fc/c7/36fcc71da5c51613a1addab82580665c.jpg',
    'https://i.pinimg.com/474x/e8/78/83/e8788343739ee604b623a3ea76142616.jpg',
    'https://i.pinimg.com/736x/16/4e/43/164e437762bace1c6d3d966aede67e6c.jpg',
  ]
  const Product = [
    'https://i.pinimg.com/236x/bd/2c/88/bd2c88f72f05210c5d825b0c5bc0c0ca.jpg',
    'https://i.pinimg.com/236x/52/d8/8c/52d88c0c27b45a0c1206a44631109ab1.jpg',
    'https://i.pinimg.com/236x/68/12/33/681233d4d211f320af88c307da19d823.jpg'
  ]
  const Motion = [
    'https://i.pinimg.com/originals/67/33/42/673342de5ad77c071270a2243cae2c46.gif',
    'https://i.pinimg.com/originals/51/1a/d7/511ad7b91dae25a2fdcd8726775bb065.gif',
    'https://i.pinimg.com/originals/14/ef/0e/14ef0ebf5bd239d8f7bb417c3c1f3dea.gif'
  ]
  const imagesObject = {
    Brand,
    Product,
    Motion
  }

  return (
    <div className="cardcontainer">
      <Card title={t('card.title1')} text={"Brand"} onClick={handleClick} currentSelected={selected} imagesObject={imagesObject} />
      <Card title={t('card.title2')} text={"Product"} onClick={handleClick} currentSelected={selected} imagesObject={imagesObject} />
      <Card title={t('card.title3')} text={"Motion"} onClick={handleClick} currentSelected={selected} imagesObject={imagesObject} />
      <CardView
        title={t('card.title4')}
        currentSelected={selected}
        randomImage={randomImage} />
    </div>
  )
}

export default CardContainer
