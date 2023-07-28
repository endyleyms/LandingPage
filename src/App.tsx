import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header/Header'
import CardContainer from './components/CardContainer/CardContainer';
import AssociationCard from './components/AssociationCard/AssociationCard';
import Work from './components/Work/Work';

function App() {

  const associations = [
    { title: 'https://mms.businesswire.com/media/20221031005425/es/1618755/2/Terraformation_logo.jpg', description: 'Sociable design for  a global forest accelerator. We partnered with the growing climate tech  startup to evolve their brand and web experience for a better future' },
    { title: 'https://1000marcas.net/wp-content/uploads/2022/07/Coursera-Logo-768x432.png', description: 'Understanding what learners want. Usings insights from user interviews, we helped the edtech startup Coursera evolve the UX of their Master Track Certificate product to drive enrollment' },
    { title: 'https://assets-global.website-files.com/605f2547102fdbbeff1b21e0/639ab417a95e0e22aca0a688_QEDInvestors-Lockup-Blue.svg', description: 'A trusted design partner for the premier VC in fintech. Whit strategy-led systematic design, we help QEDs portfolio companies bring new brands and products to market' },
    { title: 'https://newscenter.softwareag.com/content/dam/softwareag/global/image/logos/sag/sag-logo-dark.png', description: 'Bridging the gap for the connected enterprise. Using abstract 3D models, we created unique animation to show Software AG helps businesses reach their digitally transformed future.' }
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
      <div className='container-title'>
        <h1>We partner with forward-thinking enterprises and starups.</h1>
      </div>
      <div className='container-associations'>
        {associations.map((item, i) => (
          <AssociationCard key={i} CardTitle={item.title} description={item.description} />
        ))}
      </div>
      <Work />
    </>
  )
}

export default App
