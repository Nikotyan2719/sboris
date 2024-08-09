import Header from './assets/components/Header/Header';

import './index.scss';
import MainSection from './assets/components/MainSection/MainSection';
import Footer from './assets/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
