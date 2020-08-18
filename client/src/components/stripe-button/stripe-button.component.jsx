import React from "react"
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios"


const StripeCheckoutButton=({price})=>{
    const priceForStrip=price*100;
    const publishablekey="pk_test_51GxWguHicZ0dFbvUxrIjUH6XvhpSiOERMkuwYgG49pIlLDK6F9CklV4z3GRjIoNgbCAP7vS1gEdaxl6M6SsosnjP002ZUPnDck";
    const onToken=token=>{
        axios({
                url:"payment",
                method:"post",
                data:{
                    amount:priceForStrip,
                    token
                }
            }).then(response=>{
                alert('Payment Successful');
            }).catch(error=>{
                alert('There was an issue with your payment. Please make sure you use the provided credit card');
                console.log("payment error: ",JSON.parse(error));
            });
    }
  return (
      <StripeCheckout 
      label="Pay Now"
      name="Crwn Clothing Ltd"
      billingAddresss
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      anount={priceForStrip}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}/>
  )
}
// image='../../assets/favicon.ico.ico'
export default StripeCheckoutButton