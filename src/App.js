
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.copmponent';
import Navigation from './routes/navigation/navigation.component';



const Shop = () => {
  return <h1> Im the shop page.</h1>
}


const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop />} />
        </Route>
      
     {/*  <Route path='/' element={<Navigation />}>
        <Route path='home' element={<Home />}>
          <Route index element={<Shop />} />
        </Route>
      </Route> */}
    </Routes>
  );
}

export default App;
