// import React from "react";
// import { Link } from "react-router-dom";
// import "./Payment.css";
// import { useNavigate } from 'react-router-dom';
// import QRCode from "react-qr-code";
// import Footer from "./Footer";
// function Home() {
//    const nav = useNavigate();
//         const handlePayment=()=>{
//        nav("/payment")
//         }
//   return (
//     <p>Scan QR
//     <div className="qr">
//     <QRCode
//     size={300}
//     bgcolor="white"
//     fgColor="black"
//     value=""
//     />
//     </div>
//     </p>
//   );
// }

// export default Home;

import logo from './logo.svg';
import './Payment.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="App">
      <h1><img src={logo} className="App-logo" alt="logo" /> Payment</h1>
      <hr />
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      />
      <div className='qr'>
        <p>Contact Google pay</p>
      <QRCode
         size={300}
         bgcolor="white"
         fgColor="black"
         value="https://support.google.com/pay/india/?hl=en&visit_id=638257760656646497-191252328&rd=1"
         />
         </div>
    </div>
        
         
    
  );
}

export default App;