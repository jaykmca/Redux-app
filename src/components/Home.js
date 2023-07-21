import React, {useEffect, useState} from 'react';
import { addToCart } from '../Services/Actions/action';
import { useDispatch,useSelector } from 'react-redux'

function Home(props) {
    const dispatch = useDispatch()
    const handleAddToCart = (data) =>{
        console.log("data", data)
        dispatch(addToCart(data))
    }
   
    console.warn('Home1111', props)
    const products = props.item
    console.log("products", products)

    const [isAdded, setIsAdded] = useState(false)
    const cardItems = useSelector((state) => state.cardItems)
    console.log('cardItems', cardItems)

    useEffect(()=>{
        if (cardItems && cardItems.length) {
            cardItems.forEach(element => {
               console.log("----elment", element)
               console.log("-------products", products)
                if(element.cardData.name === products.name)
               {
                 console.log('---------------------------', element) 
                setIsAdded(true)
               }
            });

            // for (let i = 0; i < products.length; i++) {
            //     if (cardItems[i]){
            //       if (products[i].name === cardItems[i].cardData.name) {
            //           setIsAdded(true)
            //       }
            //      }
            //   }
        }
    })

    return (
        <div>
           
            
             <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        name: {products.name}
                    </span>
                    <span>
                        Price: {products.price}
                    </span>
                </div>
                {
                    isAdded ?
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        // ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
                        () => handleAddToCart({price:products.price,name:products.name})
                        }>
                        Remove To Cart</button>
                </div> :
                 <div className="btn-wrapper item">
                 <button 
                 onClick={
                     // ()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
                     () => handleAddToCart({price:products.price,name:products.name})
                     }>
                     Add To Cart</button>
             </div>
               }
            </div>   
       
           
        </div>
    );
}

export default Home;