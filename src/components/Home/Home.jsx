import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import MainProcess from "../Process/MainProcess";
import MainTestimonial from "../Testimonial/MainTestimonial";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import Cards from "../Cards/Cards";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlaced from "../Order Placed/OrderPlaced";

//----------------------------------------------------------------------------------------

const Home = () => {
  const handleScroll = () => {
    const section = document.getElementById("product-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // ----------------------------------------------------------------------------------------
  // states
  const [searchTerm, setSearchTerm] = useState("");
  //for panel
  const [activePanel, setActivePanel] = useState(null);

  //for order summary
  const [orderSummary, setOrderSummary] = useState(false);
  // for orderplaced
  const [orderPlaced, setOrderPlaced] = useState(false);

  // for add cart items
  const [cart, setCart] = useState(()=>{
    const storeCart = localStorage.getItem('cart');
    return storeCart ? JSON.parse(storeCart) : []
  });

  // for wishlist
  const [wishList, setwishList] = useState(()=>{
    const storeWishList = localStorage.getItem('wishList');
    return storeWishList ? JSON.parse(storeWishList) : []
  });

  //----------------------------------------------------------------------------------------

  // total calculation
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // item quantity for navbar icon
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // shipping fee
  const shippingFee = totalItems * 2;

  // order total
  const orderTotal = subTotal + shippingFee;

  //----------------------------------------------------------------------------------------

  //cart and wishlist show tab function
  const handlePanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };

  //cart and wishlist closed tab function
  const closedPanel = () => setActivePanel(null);

  // remove item from cart
  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  //----------------------------------------------------------------------------------------

  //Quantity Increment
  const quantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //Quantity Decrement
  const quantityDeccrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //----------------------------------------------------------------------------------------

  // adding cart items to cart
  const addToCart = (product) => {
    //functiion to stop adding similar items in cart
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("Item already in the cart");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // add to wishlist
  const addToWishList = (product)=>{
    const isInWishList = wishList.some(item=> item.id === product.id);

    if(isInWishList){
      setwishList(wishList.filter(item=> item.id !== product.id))
    }
    else{
      const addDate = new Date().toLocaleDateString('en-GB');
      setwishList([...wishList, {...product, addDate}])
    }
  };

  // clear wishlist function
  const clearWishList = ()=>{
    setwishList([]);
  };

  // ---------------------------------------------------------------------------------------
  // add cart to localstorage
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishList', JSON.stringify(wishList));
  },[cart, wishList])
    
  

  //----------------------------------------------------------------------------------------
  return (
    <div>
      <Navbar
        setSearchTerm={setSearchTerm}
        handleScroll={handleScroll}
        handlePanel={handlePanel}
        totalItems={totalItems}
        wishList={wishList}
      />
      <Hero />
      <Category />
      <Values />
      <Products searchTerm={searchTerm} addToCart={addToCart} addToWishList={addToWishList} wishList={wishList} />
      <Discount />
      <MainProcess />
      <MainTestimonial />
      <Cart
        activePanel={activePanel}
        closedPanel={closedPanel}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDeccrement={quantityDeccrement}
        subTotal={subTotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />
      <WishList activePanel={activePanel} closedPanel={closedPanel} wishList={wishList} addToCart={addToCart} clearWishList={clearWishList}/>
      {orderSummary && (
        <OrderSummary
          cart={cart}
          subTotal={subTotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderPlaced={setOrderPlaced}
          setOrderSummary={setOrderSummary}
          setCart={setCart}
        />
      )}

      {
        orderPlaced && 
        <OrderPlaced setOrderPlaced={setOrderPlaced} setOrderSummary={setOrderSummary} />
      }
    </div>
  );
};

export default Home;
