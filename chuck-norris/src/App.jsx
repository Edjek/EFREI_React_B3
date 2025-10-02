import { Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import './styles/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favoris' element={<Favorites />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
