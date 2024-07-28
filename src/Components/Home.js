import { Container } from 'react-bootstrap'
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

function Home() {

  let items = [
    {
      id: 1,
      title: 'Black t-shirt',
      description: "Size:L ",
      image: image,
      price: 100
    },
    {
      id: 2,
      title: 'White T-shirt',
      description: "Size:L ",
      image: white,
      price: 100
    },
    {
      id: 3,
      title: 'Grey t-shirt',
      description: "Size:L ",
      image: grey,
      price: 100
    },
    {
      id: 4,
      title: 'Brown t-shirt',
      description: "Size:L ",
      image: brown,
      price: 100
    },
    {
      id: 5,
      title: 'Red t-shirt',
      description: "Size:L ",
      image: red,
      price: 100
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
  const [empty, setEmpty] = useState(false)
  const [product, setProducts] = useState(items)
  function Searchitems(search) {
    setEmpty(false)
    if (search === '') {
      setProducts(items);
      return;
    }
    const filteritems = items.filter((item) => {
      if (item.title.replace('-', '').toLowerCase().includes(search.replace('-', '').toLowerCase())) {
        return item;
      }
      else {
        return null;
      }
    })
    setProducts(filteritems)
    if (filteritems.length === 0) {
      setEmpty(true);
    }
  }

  return (
    <>
      <Headers />
      <div className="flex rounded-full border-2 border-blue-500 overflow-hidden max-w-sm mx-auto font-[sans-serif] mb-5">
        <input onChange={(e) => Searchitems(e.target.value)} type="email" placeholder="Search Something..."
          className="w-full outline-none bg-white text-xs px-3 py-2" />
        <button onClick={Searchitems} type='button' className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </button>
      </div>








      {/* <input className='search-bar' type="text" placeholder='search' onChange={(e) => Searchitems(e.target.value)} ></input>
      <button className='count-btn' onClick={Searchitems}><FontAwesomeIcon icon={faSearch} /></button> */}
      <div class="bg-gray-100 font-[sans-serif] relative max-w-4xl mx-auto rounded overflow-hidden">
        <div class="grid sm:grid-cols-2 gap-6 max-sm:gap-12 py-12 px-6">
          <div class="bg-gradient-to-tr from-[#273284b6] to-[#1e1e60] px-4 py-8 text-center rounded-[30px] w-full max-w-[300px] h-max skew-x-[10deg] mx-auto shadow-lg shadow-purple-400">
            <h6 class="text-gray-300 text-4xl">Big</h6>
            <h2 class="text-white text-7xl font-bold mt-0.5">Sale!</h2>
            <p class="text-gray-300 text-base mt-2">Arriving this weekend</p>
          </div>

          <div class="text-center">
            <h3 class="font-bold text-4xl text-orange-500">Special Offer</h3>
            <h6 class="text-2xl text-orange-500 mt-0.5">Limited Time Deal</h6>
            <p class="text-gray-800 text-base mt-4">Discover amazing discounts and deals. Don't miss out on our exclusive offers available for a limited time.</p>

            <button type="button" class="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <span className='normal-text'>Choose Any Product</span>

      {
        empty ?
          <h1>No items</h1> :
          <div className='wrapper'>
            {
              product.map((items, index) => (
                <Items image={items.image} title={items.title} text={items.description} price={items.price} items={items} />
              ))
            }
          </div>
      }
      <Footer />
    </>
  )
}
export default Home;