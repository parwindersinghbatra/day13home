// import logo from './logo.svg';
// import './App.css';
// import Products from './component/Products';
// import Cart from './component/Cart';
// import React, { useState, useReducer } from 'react';
 
// function App() {

//     const [state, dispatch] = useReducer((state, action) => {

//       switch (action.type) {
//         case 'ADD':
//           return {
//             ...state,
//             totalItems: state.totalItems + 1,
//             totalPrice: state.totalPrice + action.payload.price,
//           };
        
//           case 'REMOVE':
//             return { ...state, 
//               totalItems: state.totalItems - 1,
//               totalPrice: state.totalPrice - action.payload.price
//             };
//           default: return{...state}
//       }
//     },
//     {
//       totalItems: 0, totalPrice: 0 
//     }
//       );      
//   const products = [
//     {id:1, name: 'Parwinder', price:100, quantity:0},
//     {id:2, name: 'Rohit', price:200,quantity:0},
//     {id:3, name: 'Ravi', price:300 ,quantity:0},
//     {id:4, name: 'Raj', price:400, quantity:0},
//   ]
    
//   return (
//     <div className="App">
//         <Products/>
//         {products.map((item, index) => {
//         return (
//           <div key={index}>
//             <span>{item.name}</span>
//             <span>{item.price}</span>
//             <div className="container">
//               <button
//                 onClick={() => {
//                   if (item.quantity > 0) {
//                     dispatch({
//                       type: 'REMOVE',
//                       payload: { ...item, price: item.price * item.quantity },
//                     });
//                     item.quantity--;
//                   }
//                 }}
//               >
//                 -
//               </button>
//               <span>{item.quantity}</span>
//               <span>Total Price: {item.price * item.quantity}</span>
//               <button
//                 onClick={() => {
//                   dispatch({
//                     type: 'ADD',
//                     payload: { ...item, price: item.price * item.quantity },
//                   });
//                   item.quantity++;
//                 }}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         );
//       })}
//       {/* <Cart /> */}
//     </div>
//   );
// }

// export default App;



import logo from './logo.svg';
import './App.css';
import Cart from './component/Cart';
import React, { useState, useReducer } from 'react';

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Product - 1', price: 100, quantity: 0 },
    { id: 2, name: 'Product - 2', price: 200, quantity: 0 },
    { id: 3, name: 'Product - 3', price: 300, quantity: 0 },
    { id: 4, name: 'Product - 4', price: 400, quantity: 0 },
  ]);

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };

      case 'REMOVE':
        return {
          ...state,
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - action.payload.price
        };
      default:
        return { ...state }
    }
  },
    {
      totalItems: 0, totalPrice: 0
    }
  );

  return (
    <div className="App">
      <div className='column'>
        <p>Products</p>
      {products.map((item, index) => {
        return (
          <div key={index} className='container_main'>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <div className="container">
              <button
                onClick={() => {
                  if (item.quantity > 0) {
                    dispatch({
                      type: 'REMOVE',
                      payload: { price: item.price },
                    });
                    const updatedProducts = [...products];
                    updatedProducts[index].quantity--;
                    setProducts(updatedProducts);
                  }
                }}
              >
                -
              </button>
              <span 
              style={{
                margin:'0px 5px',
              }}
              >{item.quantity}</span>
              {/* <span>{item.price * item.quantity}</span> */}
              <button
                onClick={() => {
                  dispatch({
                    type: 'ADD',
                    payload: { price: item.price },
                  });
                  const updatedProducts = [...products];
                  updatedProducts[index].quantity++;
                  setProducts(updatedProducts);
                }}
              >
                +
              </button>
             
            </div>
            
          </div>
       
        );
      })}
      </div> 

      <div className='column'>
        <Cart 
          items={products.filter((product) => product.quantity > 0)}  
        totalItems = {state.totalItems} 
        totalPrice = {state.totalPrice}
        
        />
      </div>
      
    </div>

  );
}

export default App;
