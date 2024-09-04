import { BrowserRouter } from 'react-router-dom';
import { Header } from '../widgets/header';
import { Main } from '../widgets/main';
import { Footer } from '../widgets/footer';
import './styles/GeneralStyles.css';

export function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
