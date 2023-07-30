import {loadStripe} from '@stripe/stripe-js';
import { useAppSelector } from '../Store/hook';
import { TotalSelect } from '../Store/cart/cart-selector';
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../Components/PayForm/CustomPaymentForm';
import Spinner_product from '../Components/Spinner/spinner-products';

export type StripeTypes = {
    clientSecret: string;
    appearance: {
      theme: "stripe",
    }
  };
const stripePromise = loadStripe(`${import.meta.env.VITE__STRIPE_PUBLISHABLE_KEY}`)

const Payment = () => {
    const Total = useAppSelector(TotalSelect)
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const FetchClientSecret = async()=>{
            const res = await fetch("https://peeshop-ts-back.adaptable.app/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount : Total*100}),
            })
            const data = await res.json()
            if(data !== 'cannot'){
                setClientSecret(data.clientSecret)
            }
        }
        FetchClientSecret()
    }, []);

    const options : StripeTypes = {
        clientSecret,
        appearance : {
            theme : "stripe"
        }
      };
    return (
        <div>
        {clientSecret ? (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        ):<Spinner_product/>}
        </div>
    );
}

export default Payment