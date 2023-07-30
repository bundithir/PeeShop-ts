import{ useState , useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useAppSelector , useAppDispatch } from "../../Store/hook";
import { Selectuser } from "../../Store/user/user-selector";
import { LocatedForm , LayoutForm , Button } from '../../Routes/Sign/Form-style'
import Spinnerpayment from "../Spinner/spinner-payment";
import { ResetCart } from "../../Store/cart/cart-reducer";
import Success from "./Success";


type StripePaymentElementOptions = {
  layout: "tabs" | "accordion"
}
const paymentElementOptions: StripePaymentElementOptions = {
  layout: "tabs"
}

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const user = useAppSelector(Selectuser)
  const dispatch = useAppDispatch()
  const [payLoading , setpayLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent } : any) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          dispatch(ResetCart())
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setpayLoading(true)

    const paymentResult = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/checkout",
        payment_method_data : {
          billing_details : {
            name : user.email
          }
        }
      },
    });

    const { error } = paymentResult

    if(error) {
      alert('TRY AGAIN')
    }
    setpayLoading(false)

  };


  return (
    <div className={LocatedForm}>
      { message ? 
      <Success/>
      : 
      <form className={LayoutForm} onSubmit={handleSubmit}>
        <PaymentElement options={paymentElementOptions} />
        <button className={Button} disabled={!stripe || !elements}>
        {payLoading?<Spinnerpayment/>:"PAY NOW"}
        </button>
      </form>}
    </div>
    
  );
}