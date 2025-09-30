import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favori' element={<Favorite />} />
            </Routes>
        </>
    );
}

export default App;
