import { BsSearch } from "react-icons/bs";
import './Header.css'
import Acordion from './Acordion/acordion'

const Header = () => {
  const countries = ['Colombia', 'España', 'Chile', 'México', 'Perú', 'Reino Unido']

  return (
    <div className='container-header'>
      <div>VASS</div>
      <div>Casos de éxito</div>
      <div><Acordion title='Mercados' options={undefined} /> </div>
      <div><Acordion title='Paises' options={countries} /></div>
      <div><Acordion title='Somos VASS' options={undefined} /></div>
      <div><Acordion title='Cómo lo hacemos' options={undefined} /></div>
      <div>Insights</div>
      <div>Noticias</div>
      <div>VASS Research</div>
      <div>EN</div>
      <BsSearch />
    </div>
  )
}

export default Header
