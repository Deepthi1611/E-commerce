import { Route, Routes } from 'react-router-dom'
import './App.css'
import {AuthLayout} from './components/auth/index'
import {AuthLogin, AuthRegister} from './pages/auth/index'
import {AdminLayout} from './components/admin-view/index'
import {AdminDashboard, AdminFeatures, AdminOrders, AdminProducts} from './pages/admin-view/index'
import { ShoppingLayout } from './components/shopping-view/index'
import {ShoppingAccount, ShoppingCheckout, ShoppingHome, ShoppingListing} from './pages/shopping-view/index'
import NotFound from './pages/not-found/Index'

function App() {

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* common components */}
      {/* <h1>Header component</h1> */}
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<AuthLogin />} />
          <Route path='register' element={<AuthRegister />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='features' element={<AdminFeatures />} />
        </Route>
        <Route path='/shop' element={<ShoppingLayout />}>
          <Route path='account' element={<ShoppingAccount />} />
          <Route path='checkout' element={<ShoppingCheckout />} />
          <Route path='home' element={<ShoppingHome />} />
          <Route path='listing' element={<ShoppingListing />} />
        </Route>
        <Route path='*' element = {<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
