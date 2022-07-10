
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.copmponent';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.components';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';



const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
     if(user){
     createUserDocumentFromAuth(user)
     }
     dispatch(setCurrentUser(user))

    })
    return unsubscribe
 },[])



  return (
    <Routes>
       <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
    </Routes>
  );
}

export default App;
