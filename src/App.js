
import './App.css';


import Home from './components/Home/Home';
import Destinations from './components/Destinations/Destinations';
import Deals from './components/Deals/Deals';
import MeetUs from './components/MeetUs/MeetUs';
import LogIn from './components/LogIn/LogIn';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home ></Home>
          </Route>
          <Route exact path="/destinations">
            <Destinations></Destinations>
          </Route>
          <Route exact path="/hotdeals">
            <Deals></Deals>
          </Route>
          <Route exact path="/meetus">
            <MeetUs></MeetUs>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router >
    </div>

  );
}

export default App;
