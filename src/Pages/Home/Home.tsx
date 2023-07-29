import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Header from '../../components/Header/Header'
import CardContainer from '../../components/CardContainer/CardContainer';
import AssociationCard from '../../components/AssociationCard/AssociationCard';
import Work from '../../components/Work/Work';



function Home() {
  const { t } = useTranslation();

  const associations = [
    { img: 'https://mms.businesswire.com/media/20221031005425/es/1618755/2/Terraformation_logo.jpg', description: `${t('association.text1')}` },
    { img: 'https://1000marcas.net/wp-content/uploads/2022/07/Coursera-Logo-768x432.png', description: `${t('association.text2')}` },
    { img: 'https://assets-global.website-files.com/605f2547102fdbbeff1b21e0/639ab417a95e0e22aca0a688_QEDInvestors-Lockup-Blue.svg', description: `${t('association.text3')}` },
    { img: 'https://newscenter.softwareag.com/content/dam/softwareag/global/image/logos/sag/sag-logo-dark.png', description: `${t('association.text4')}` }
  ]

  return (
    <>
      <div className='container-header'>
        <Header />
      </div>
      <div>
        <img style={{ width: '100%', height: '80vh' }} src={'	https://i.pinimg.com/564x/b1/12/de/b112de6a194ef834128931a0fbd8f7f5.jpg'} />
      </div>
      <div style={{ padding: '10px', paddingTop: '10px' }}>
        <CardContainer />
      </div>
      <div className='container-title-home'>
        <h1>{t('welcome.title')}</h1>
      </div>
      <div className='container-associations'>
        {associations.map((item, i) => (
          <AssociationCard key={i} CardImg={item.img} description={item.description} />
        ))}
      </div>
      <div>
        <Work />
      </div>
    </>
  )
}

export default Home
