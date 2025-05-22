import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import MainScreen from './components/MainScreen/MainScreen';
import FloatBlock from './components/FloatBlock/FloatBlock';

function App() {

  return (
    <>
      <Header />
      <MainScreen />
      <FloatBlock />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
