import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import MainPage from './pages/mainPage/MainPage'
import Catalog from './pages/catalog/Catalog'
import ProductList from './pages/productList/ProductList'
import ProductPage from './pages/productPage/ProductPage'
import Gallery from './pages/gallery/Gallery'
import AboutPage from './pages/aboutPage/AboutPage'
import ContactsPage from './pages/contactsPage/ContactsPage'
import Cart from './pages/cart/Cart'
import ErrorPage from './pages/errorPage/ErrorPage'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
