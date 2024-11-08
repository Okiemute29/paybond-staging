import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const FlutterwavePayment = ({ paymentConfig, handleBillPayment }) => {
  const handleFlutterPayment = useFlutterwave(paymentConfig);

  const initiatePayment = () => {
    try {
      handleFlutterPayment({
        callback: async (response) => {
          console.log('Payment Response:', response);
          if (response.status === 'successful') {
            // Verify the transaction on your backend
            if (window.event) {
              window.event.preventDefault();
            }
            handleBillPayment(response);
          }
          closePaymentModal();
        },
        onClose: () => {
          console.log('Payment modal closed');
        },
      });
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return null; // This component doesn't render anything, it just handles the Flutterwave payment flow
};

export default FlutterwavePayment;