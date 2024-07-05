import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';


function App() {
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                    <Route path="/navbar" element={<Navbar />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/Users" element={<Users />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;