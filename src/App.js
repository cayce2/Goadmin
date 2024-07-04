import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "./components/Dashboard";
import Calendar from "./pages/calender"

function App() {
  return (
    <BrowserRouter>
     
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Calendar />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
