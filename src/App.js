import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/BookList';
import Categories from './components/Categories';
import Links from './components/Links';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route index element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
