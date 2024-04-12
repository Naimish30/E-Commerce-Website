
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {  useState } from 'react';
import {useCart} from 'react-use-cart'

function Items(props) {
    const [count, setCount] = useState(0)
   console.log(props.image)
    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function increment(){
        setCount(count + 1);
    }
    
    const {addItem}=useCart()  
    
    return (
       
        <div className='card'>
            <div className='card-body'>
                <img src={props.image} className="card_image" />
                <h2 className='card_title'>{props.title}</h2>
                <p className="card_text">{props.text}</p>
                <p className="card_text">Price:{props.price}$</p>
                <button className='count-btn' onClick={decrement}><FontAwesomeIcon icon={faMinus}/></button>
                <span className='counter-text'>{count}</span>
                <button className='count-btn' onClick={increment}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
            <button className='card_button' onClick={()=>{addItem(props.items,count); setCount(0)}}>Add to Cart</button>
        </div>
       
    );
}
export default Items;