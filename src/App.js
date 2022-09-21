import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>


    </div>
  );
}

function ExternalUser(){
  const [user, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  },[])
   return (
    <div>
      <h2>External User</h2>
      <p>{user.length}</p>
      {
        user.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
   )
}

function User(props){

  return (
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}





function Counter(){
  const [count, setCount] = useState(55);

  const increaseCount = () => setCount(count + 1);
  const decriseCount = () => setCount(count - 1);
  // const increaseCount = () =>{
  //     const newCount = count + 1;
  //     setCount(newCount)
  // }
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <br></br>
      <button onClick={decriseCount}>Decrige</button>
    </div>
  )
}

//Explore data
// const products =[
//   {name: 'laptop', price: 7250},
//   {name: 'phone', price: 7150},
//   {name: 'watch', price: 7250},
//   {name: 'tablet', price: 3750},
// ]

// //   {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
//{/* <Product name="laptop" price="47000"></Product>
//<Product name="phone" price="7500"></Product>
// <Product name="watch" price="3500"></Product> */}**/



// function Product(props){
//   return (
//     <div className='Product'>
//       <h3>Name:{props.name} </h3>
//       <p>price:{props.price} </p>
//     </div>
//   )
// }

export default App;
