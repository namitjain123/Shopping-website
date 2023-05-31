import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Success from "./pages/Success";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "./actions/userActions.js";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        {/* <Route path="/success">
          <Success />
        </Route> */}
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login dispatch={dispatch} loginUser={loginUser} />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register dispatch={dispatch} registerUser={registerUser} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;