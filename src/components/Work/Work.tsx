import { useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Work.css'

const Work = () => {
  const [click, setClick] = useState(false)
  const handleMouseEvent = () => {
    click ? setClick(false) : setClick(true)
  }
  const clickedStyle = {
    opacity: '0.1',
    zIndex: '-1',
  }

  return (
    <div>
      <Parallax pages={6} className="container-paralax">
        <ParallaxLayer sticky={{ start: 0, end: 4 }} style={click ? clickedStyle : { zIndex: -1 }}>
          <div className='container-work'>
            <h1 className='work-title'>WORK</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-start', padding: '100px' }}>
          <div className='container-image' onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
            <img src="https://i.pinimg.com/236x/24/66/f3/2466f308dedf3a98e57fae86b7a7bf37.jpg" className='image-paralax' />
            <p className='text-paralax'>New Limit</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-end', padding: '100px' }}>
          <div className='container-image' onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
            <img src="https://i.pinimg.com/564x/54/f1/31/54f13147f96872970f0bd3a73de684c8.jpg" className='image-paralax' />
            <p className='text-paralax'>Surf Internet</p>
            <p className='sub-text-paralax'>MODERNIZING A LEGACY TELECOM  BRAND FOR A BRIGHT FUTRE</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
          <div className='container-image' onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
            <img src="https://i.pinimg.com/564x/21/8d/3f/218d3fdab4a18fa58afca8ea395ec991.jpg" className='image-paralax' />
            <p className='text-paralax'>Focus Vision</p>
            <p className='sub-text-paralax'>TRANSFORMIN COMPLEX TECHNOLOGY INTO MEANINGFUL DESIGN</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5} >
          <div className='paralax-footer'>
            <h1 className='paralax-title1'>Take a look at what</h1>
            {/* <div className='paralax-line'></div> */}
            <h1 className='paralax-title2'>we can do for</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Work
