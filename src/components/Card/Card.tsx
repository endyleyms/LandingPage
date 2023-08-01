import { BsFillArrowRightCircleFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import './Card.css'
const Card = (props: {
  text: string
  title: string,
  onClick: CallableFunction,
  currentSelected: string,
  imagesObject: object | any,
}) => {
  const { title = '', onClick, currentSelected, imagesObject, text } = props



  const isBrand = currentSelected === "Brand"
  const isProduct = currentSelected === "Product"

  const handleSelect = () => {
    if (isBrand) {
      return imagesObject.Brand
    } else if (isProduct) {
      return imagesObject.Product
    } else {
      return imagesObject.Motion
    }
  }

  const isSelected = currentSelected === text
  const handleClick = () => {
    onClick(
      isSelected ? " " : text,
      handleSelect()
    )
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
