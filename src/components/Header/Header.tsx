import { useState } from "react";
import { BsSearch, } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css'
import Acordion from "../Acordion/Acordion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const countries = ['Colombia', 'España', 'Chile', 'México', 'Perú', 'Reino Unido']

  return (
    <div>
      <div className='container-headercomponent'>
        <div>VASS</div>
        <div className={`nav ${isMenuOpen ? 'isActive' : ''}`}>
          <ul className="ulListas">
            <li className="liListas">Casos de éxito</li>
            <li className="liListas"><Acordion title='Mercados' options={undefined} /> </li>
            <li className="liListas"><Acordion title='Paises' options={countries} /></li>
            <li className="liListas"><Acordion title='Somos VASS' options={undefined} /></li>
            <li className="liListas"><Acordion title='Cómo lo hacemos' options={undefined} /></li>
            <li className="liListas">Insights</li>
            <li className="liListas">Noticias</li>
            <li className="liListas">VASS Research</li>
            <li className="liListas">EN</li>
          </ul>
        </div>
        <div className="boton-search">
          <BsSearch size={20} />
        </div>
      </div>
      <AiOutlineMenu id="header__menu-btn-responsive" onClick={toggleMenu} size={40} />
    </div>
  )
}

export default Header
