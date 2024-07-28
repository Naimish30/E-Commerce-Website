import Footer from "./Footer";
import Headers from "./Headers";
import { CartProvider, useCart } from "react-use-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import '../Cart.css'
import { useEffect, useState } from "react";
import Pdf from "./Pdf";
import { useNavigate } from "react-router-dom";
function Cart() {
   const navigate=useNavigate();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()
    
    function getinformation(){
        navigate('/getinfo')
    }
    return (
        <>
            <CartProvider>
                <Headers />
                <h1>Shopping Cart</h1>
                {
                isEmpty?
                <h1>Your Cart is empty</h1>:
                <>
                {
                    items.map((items,index)=>{
                        return(
                            
                            <table className="wrapper-123">
                                
                                <tbody>
                                    <tr>
                                        <td className="cart-image-123"> <img className="cart-image-123" src={items.image}/></td>
                                        <td> {items.title}</td>
                                        <td>Price: {items.price}</td>
                                        <td><button className='cart-btn-123' onClick={()=>updateItemQuantity(items.id,items.quantity-1)}><FontAwesomeIcon icon={faMinus}/></button></td>
                                        <td>{items.quantity}</td>
                                        <td><button className='cart-btn-123' onClick={()=>updateItemQuantity(items.id,items.quantity+1)}><FontAwesomeIcon icon={faPlus}/></button></td>
                                        <td>Total price: {items.price*items.quantity}</td>
                                        <button className='remove-btn-123' onClick={()=>removeItem(items.id)}>Remove Item</button>
                                    </tr>
                                 </tbody>
                             </table>
                             
                        )
                    })
                }
                <div className="cart-bill-123">
                    <h3>Cart Totals</h3>
                    <table className="table-123">
                        <tbody>
                            <tr>
                                <td>SubTotal</td>
                                <td>${cartTotal}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>$70</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${cartTotal+70}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <button onClick={getinformation}>Proceed to Checkout</button>
                    <PDFDownloadLink document={<Pdf item={items} total={cartTotal+70} />} fileName={"Invoice.pdf"} >
          {({ blob, url, loading, error }) =>
                loading ? "Loading..." : <button className='button-123'>Print Invoice</button>
              }
        </PDFDownloadLink>
                </div>
                
                </>
            }
                
                <Footer />
            </CartProvider>
        </>
    )
}
export default Cart;


// {
//     isEmpty ? <h1>Your cart is empty</h1> :
//         <>
//             <h5>Cart total items {totalItems}</h5>
//             {
//                 items.map((items,index)=>{
//                     return(
                        
//                         <div class='cart-wrapper'>
//                             <img className="cart-image" src={items.image}/>
//                             <p className="cart-text">Title:{items.title}</p>
//                             <p className="cart-text">Price:{items.price}</p>
//                             <p className="cart-text">Quantity:
//                             <button className='cart-btn' onClick={()=>updateItemQuantity(items.id,items.quantity-1)}><FontAwesomeIcon icon={faMinus}/></button>
//                             {items.quantity}
//                             <button className='cart-btn' onClick={()=>updateItemQuantity(items.id,items.quantity+1)}><FontAwesomeIcon icon={faPlus}/></button>
//                             </p>
//                             <p className="cart-text"> Total Price : {items.quantity*items.price}</p>
//                         </div>
                        
                        
//                     )
//                 })
//             }
//             <h1 className="total-price-text">Cart Total Value:{cartTotal}</h1>
            
//         </>
// }
