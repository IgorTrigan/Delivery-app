import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './Containers'
import { Coupons, History, Shop, ShoppingCart } from './pages'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='*' element={<Shop />} />
          <Route path='shoppingCart' element={<ShoppingCart />} />
          <Route path='history' element={<History />} />
          <Route path='coupons' element={<Coupons />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
