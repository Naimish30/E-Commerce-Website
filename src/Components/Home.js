import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import banner from '../images/banner.png'
import image from '../images/tshirt1.jpg'
import brown from '../images/brown tshirt.jpeg'
import grey from '../images/grey tshirt.jpeg'
import red from '../images/red tshirt.jpeg'
import white from '../images/white tshirt.jpeg'
import jeans from '../images/blue jeans.jpeg'
import coffee from '../images/coffee maker.jpeg'
import cooking from '../images/cooking set.jpeg'
import dress from '../images/floral dress.jpeg'
import backpack from '../images/laptop backback.jpeg'
import wallet from '../images/leather wallet.jpeg'
import shoes from '../images/running shoes.jpeg'
import watch from '../images/smartwatch.jpeg'
import mat from '../images/yoga mat.jpeg'
import wireless from '../images/wireless headphone.jpeg'
import Items from '../Components/Items'
import Footer from '../Components/Footer'
import Headers from './Headers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

function Home(){
    
    let items=[
        {
            id:1,
            title:'Black t-shirt',
            description:"Size:L ",
            image:image,
            price:100
        },
        {
            id:2,
            title:'White T-shirt',
            description:"Size:L ",
            image:white,
            price:100
        },
        {
            id:3,
            title:'Grey t-shirt',
            description:"Size:L ",
            image:grey,
            price:100
        },
        {
            id:4,
            title:'Brown t-shirt',
            description:"Size:L ",
            image:brown,
            price:100
        },
        {
            id:5,
            title:'Red t-shirt',
            description:"Size:L ",
            image:red,
            price:100
        },
        
          {
            id: 6,
            title: "Blue Jeans",
            description: "Slim fit, Size: M",
            image: jeans,
            price: 75
          },
          {
            id: 7,
            title: "Running Shoes",
            description: "Brand: XYZ, Size: 10",
            image: shoes,
            price: 120
          },
          {
            id: 8,
            title: "Leather Wallet",
            description: "Brown, RFID blocking",
            image: wallet,
            price: 50
          },
          {
            id: 9,
            title: "Wireless Headphones",
            description: "Noise-canceling, Bluetooth",
            image: wireless,
            price: 150
          },
          {
            id: 10,
            title: "Floral Dress",
            description: "Summer collection, Size: S",
            image: dress,
            price: 80
          },
          {
            id: 11,
            title: "Laptop Backpack",
            description: "Fits up to 15-inch laptop",
            image: backpack,
            price: 40
          },
          {
            id: 12,
            title: "Coffee Maker",
            description: "12-cup capacity, Programmable",
            image: coffee,
            price: 80
          },
          {
            id: 13,
            title: "Yoga Mat",
            description: "Non-slip, Thickness: 6mm",
            image: mat,
            price: 20
          },
          {
            id: 14,
            title: "Smartwatch",
            description: "Fitness tracker, Heart rate monitor",
            image: watch,
            price: 120
          },
          {                                                                     
            id: 15,
            title: "Cooking Pan Set",
            description: "Non-stick, Set of 3",
            image: cooking,
            price: 60
          }
        
    ]
    const [empty,setEmpty]=useState(false)
    const [product,setProducts]=useState(items)
    function Searchitems(search){
        setEmpty(false)
        if(search === ''){
            setProducts(items);
            return;
        }
        const filteritems=items.filter((item)=>{
            if(item.title.replace('-','').toLowerCase().includes(search.replace('-','').toLowerCase())){
                return item;
            }
            else{
                return null;
            }
        })
        setProducts(filteritems)
        if(filteritems.length===0){
           setEmpty(true);
        }
    }
    
    return(
        <>
            <Headers />
            <input className='search-bar' type="text" placeholder='search' onChange={(e)=>Searchitems(e.target.value)} ></input>
            <button className='count-btn' onClick={Searchitems}><FontAwesomeIcon icon={faSearch}/></button>
            
           <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <figure className='position-relative'>
                <img src={banner} className='img-fluid'/>
                <figcaption className='banner-text'>Sale is Live <br/>50% Off<br/><button className='banner-button'>Explore</button></figcaption>
            </figure>
            </Container> 
            <span className='normal-text'>Choose Any Product</span>
            
            {
                empty?
                <h1>No items</h1>:
                <div className='wrapper'>
                {
                    product.map((items,index)=>(
                        <Items image={items.image} title={items.title} text={items.description} price={items.price} items={items} />
                    ))
                }
            </div>
            }
            <Footer/>
        </>
    )
}
export default Home;