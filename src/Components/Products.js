import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Headers from './Headers';
import Items from './Items';
import axios from 'axios';


function Products() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost/shopping_images/data.php");
      setItems(result.data.products);
      console.log(items[1].ItemImage)

    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately, e.g., set an error state
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

      <Headers />
      <div>Product Page</div>
      <div className='wrapper'>
      {items.map((item, index) => (
        <Items
          key={index}
          image={'img/' + item.ItemImage}
          title={item.ItemName}
          text={"abc"}
          price={item.ItemPrice}
          items={items}
        />
      ))}
      </div>
      <Footer />
    </>
  );
}

export default Products;
