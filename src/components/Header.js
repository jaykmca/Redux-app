import React , {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
 

function Header(props) {
   console.warn('Home', props)
   const cardData = useSelector((state) => state.cardItems)
   const [cardDataItems, setcardDataItems ] = useState(0)

   useEffect(()=>{
    setcardDataItems(cardData.length)
   },[cardData])

   console.log('cardData', cardData) 
    return (
        <div>
            <div className="add-to-cart">
                 <span className="cart-count">{cardDataItems}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
           
        </div>
    );
}

export default Header;