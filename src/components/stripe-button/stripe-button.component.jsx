import React from "react"
import StripeCheckout from 'react-stripe-checkout'

const onToken=token=>{
    console.log(token)
    alert('Payment Successful')
}

const StripeCheckoutButton=({price})=>{
    const priceForStrip=price*100;
    const publishablekey="pk_test_51GxWguHicZ0dFbvUxrIjUH6XvhpSiOERMkuwYgG49pIlLDK6F9CklV4z3GRjIoNgbCAP7vS1gEdaxl6M6SsosnjP002ZUPnDck";
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