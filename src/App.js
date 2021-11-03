import { Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import DestinationsPage from './Pages/DestinationsPage';
import FlightsPage from './Pages/FlightsPage';
import HotelsPage from './Pages/HotelsPage';
import ProductPage from './Pages/ProductPage';

var tip_list_ = {};


function App() {

  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <MainPage/>
        </Route>      
        <Route path='/Destinations'>
          <DestinationsPage/>
        </Route>
        <Route path='/Flights'>
          <FlightsPage/>
        </Route>
        <Route path='/Hotels'>
          <HotelsPage/>
        </Route>
        <Route path='/product/:id'>
          <ProductPage/>
        </Route>

      </Switch>
    </div>

  );
}

export default App;
