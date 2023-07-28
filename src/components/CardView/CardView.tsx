import './CardView.css'
const CardView = (props: {
  title: string,
  currentSelected: string,
  randomImage: any
}) => {
  const {
    title,
    currentSelected,
    randomImage
  } = props
  const length = title.length
  const deg = 360 / length

  const lengthCurrent = currentSelected.length




  return (
    <>
      {lengthCurrent <= 1 ?
        <div className="container-cardview" style={{ backgroundColor: "black" }}>
          <div className='spinning-text-wrapper'>
            <div className='spinning-text'>
              <p>{title.split('').map((letra, i) => (
                <span key={i} style={{ transform: `rotate(${deg * i}deg)` }}>{letra}</span>
              ))}</p>
            </div>
          </div>
        </div>
        :
        <div className="container-cardview" style={{ backgroundColor: "white" }}>
          <img className='containerImage' src={randomImage} />
        </div>
      }
    </>
  )
}

export default CardView
