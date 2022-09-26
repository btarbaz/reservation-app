import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Home from './routes/home/Home';
import Hotel from './routes/hotel/Hotel';
import Hotels from './routes/hotels/Hotels';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<Hotel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
