
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import CookieDetail from "./components/CookieDetail";
import cookies from "./products";


function App() {
  const cookie = cookies[0]
  return (
    <div>
      <Home />
      <ProductList />

<CookieDetail cookie={cookie}/>
    </div>
  );
}

export default App;

//I tried copy pasting from the warehouse solution but it didn't work. I think the names are different.