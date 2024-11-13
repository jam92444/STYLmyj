import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivaryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate()
  const addToCart = async (itemId, size) => {


    if (!size) {
        toast.error("Select Product Size");
        return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    toast.success("Product is added to cart")
  };

  const getCartCount = ()=>{
    let totalCount = 0;

    for (const items in cartItems){
        for(const item in cartItems[items]){
            try {
                if (cartItems[items][item] >0) {
                    totalCount += cartItems[items][item];
                    
                }
            } catch (error) {
                
            }
        }
    }
    return totalCount;
  }

  const updateQuantity = async (itemId,size,quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData)
    
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    
    // Loop through cartItems
    for (const items in cartItems) {
      
      // Find product information based on itemId (product._id)
      let itemInfo = products.find((product) => product._id === items);
      console.log("info",itemInfo);
      for(const item in cartItems[items])
      try {
        if(cartItems[items][item]>0){
          totalAmount +=itemInfo.price * cartItems[items][item];
          console.log(totalAmount);
          
        }
      } catch (error) {
        
      }
    }
    // console.log(totalAmount); 
    
    return totalAmount; // Return total amount as a number
  };
  useEffect(()=>{
      getCartAmount();
      
      
      
  },[cartItems])
  const value = {
    products,
    currency,
    navigate,
    delivaryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,updateQuantity,getCartAmount
};
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;