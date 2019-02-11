import React, {
  Component
} from 'react';
// import Cart from './components/Cart'
// import Products from './components/Products'
import Cart from './containers/CartContainer.js'
import Products from './containers/ProductsContainer.js'
class App extends Component {
  render() {
    return (
      <div>
      <h1>shopping Cart </h1>
      <hr />
      <Products></Products>
      <hr />
      <Cart></Cart>     
      </div>
    );
  }
}

export default App