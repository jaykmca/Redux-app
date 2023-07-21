
import './App.css';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import Home  from './components/Home'
import Header  from './components/Header';

function App() {
  const products = [
      
    {
      name:"Sumsung Mobile",
      color: "black",
      price: 3000,
      image: "https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png"
    },
    {
      name:"Nokia Mobile",
      color: "black",
      price: 2000,
      image: "https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png"
    },
    {
      name:"i Phone Mobile",
      color: "white",
      price: 5000,
      image: "https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png"
    },
  ]
  
  return (
    <div className="App">
      <Header/>
       {
        products.map((item)=><Home item={item}/>)
      } 
      {/* <Home item={products}/>  */}
    </div>
  );
}

export default App;
