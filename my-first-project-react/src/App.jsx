import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
    return (
        <>
            <Header></Header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
