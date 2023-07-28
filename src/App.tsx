import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header/Header'
import CardContainer from './components/CardContainer/CardContainer';

function App() {

  return (
    <>
      <div className='container-header'>
        <Header />
      </div>
      <div>
        <img style={{ width: '100%', height: '60vh' }} src={'	https://i.pinimg.com/564x/66/e5/17/66e51752da2da5e4bdf2795f59c7fd92.jpg'} />
      </div>
      <div style={{ padding: '10px', paddingTop: '20px' }}>
        <CardContainer />
      </div>
    </>
  )
}

export default App
