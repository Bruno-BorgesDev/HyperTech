import { BrowserRouter, Route, Switch  } from "react-router-dom";

import {Home} from "./pages/Home";
import {ShoppingCart} from "./pages/Shopping-Cart";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ShoppingCart" component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;