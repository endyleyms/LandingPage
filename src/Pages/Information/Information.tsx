import './Information.css'
import Header from "../../components/Header/Header"
import { useTranslation } from 'react-i18next';
import FormInfo from '../../components/FormInfo/FormInfo';

const Information = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='container-header'>
        <Header />
      </div>
      <div>
        <img style={{ width: '100%', height: '80vh' }} src={'	https://i.pinimg.com/564x/b1/12/de/b112de6a194ef834128931a0fbd8f7f5.jpg'} />
      </div>
      <div className='container-title-information'>
        <h1>{t('welcome.title2')}</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FormInfo />
      </div>
    </>
  )
}

export default Information
