import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CategoryList from './pages/CategoryList';
import CategoryDetail from './pages/CategoryDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:prdNo" element={<ProductDetail />} />
        <Route path="/categories" element={<CategoryList />} />
     <Route path="/categories/:ctgryNo" element={<CategoryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;