import { BsFillArrowRightCircleFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import './Card.css'
const Card = (props: {
  text: string
  title: string,
  onClick: CallableFunction,
  currentSelected: string,
  imagesObject: object | any,
  selectRandomImage: CallableFunction,
}) => {
  const { title = '', onClick, currentSelected, imagesObject, selectRandomImage, text } = props

  const handleSelect = () => {
    currentSelected === "Brand" ?
      selectRandomImage(imagesObject.Brand)
      : currentSelected === "Product" ?
        selectRandomImage(imagesObject.Product)
        : currentSelected === "Motion" &&
        selectRandomImage(imagesObject.Motion)
  }

  const isSelected = currentSelected === text
  const handleClick = () => {
    onClick(isSelected ? " " : text)
    handleSelect();
  }


  const getStyle = () => {
    if (isSelected) {
      return {
        color: "white",
        title: "black"
      }
    }
    return {
      color: "black",
      title: "white"
    }
  }


  return (
    <div className="container-card" style={{ backgroundColor: getStyle().color }} onClick={handleClick}>
      <h1 style={{ color: getStyle().title }}>{title}</h1>
      {getStyle().color === "black" ?
        <BsFillArrowRightCircleFill color={"white"} size={30} />
        :
        <BsFillArrowUpRightCircleFill size={30} />
      }
    </div>
  )
}

export default Card
