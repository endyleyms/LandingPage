import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation, } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import { BsSearch, } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import './Header.css'
import Acordion from "../Acordion/Acordion";

const lngs = {
  en: { nativeName: 'EN' },
  es: { nativeName: 'ES' }
};

const Header = () => {
  const navigation = useNavigate();
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const countries = ['Colombia', 'España', 'Chile', 'México', 'Perú', 'Reino Unido']

  return (
    <div>
      <div className='container-headercomponent'>
        <Button variant="dark" onClick={() => navigation('/')}>VASS</Button>
        <Button variant="dark" onClick={() => navigation('/info')}>{t('header.h9')}</Button>
        <div className={`nav ${isMenuOpen ? 'isActive' : ''}`}>
          <ul className="ulListas">
            <li className="liListas">{t('header.h1')}</li>
            <li className="liListas"><Acordion title={t('header.h2')} options={undefined} /> </li>
            <li className="liListas"><Acordion title={t('header.h3')} options={countries} /></li>
            <li className="liListas"><Acordion title={t('header.h4')} options={undefined} /></li>
            <li className="liListas"><Acordion title={t('header.h5')} options={undefined} /></li>
            <li className="liListas">{t('header.h6')}</li>
            <li className="liListas">{t('header.h7')}</li>
            <li className="liListas">{t('header.h8')}</li>
            <li className="liListas">
              {Object.keys(lngs).map((lng: string) => (
                <Button variant={i18n.resolvedLanguage === lng ? "light" : "dark"} key={lng} onClick={() => i18n.changeLanguage(lng)}> {lngs[lng].nativeName} </Button>
              ))}
            </li>
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
