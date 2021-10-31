
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
import Register from './components/Register/Register';
import UserOrderList from './components/UserOrderList/UserOrderList';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddNewDestinations from './components/Add New Destination/AddNewDestinations';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>

      <AuthProvider>
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
            <Route exact path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute exact path="/userorderlist">
              <UserOrderList></UserOrderList>
            </PrivateRoute>
            <PrivateRoute exact path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addnewdestination">
              <AddNewDestinations></AddNewDestinations>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router >
      </AuthProvider>
    </div >

  );
}

export default App;
