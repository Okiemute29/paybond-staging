export const formatPrice = (price, currency = 'NGN', locale = 'en-NG') => {
	const validPrice = Number(price);
	if (isNaN(validPrice)) {
	  return 'NGN 0.00';
	}
  
	// Ensure validPrice is rounded to 2 decimal places before formatting
	const roundedPrice = parseFloat(validPrice.toFixed(2));
  
	// Format the price using Intl.NumberFormat
	const formattedPrice = new Intl.NumberFormat(locale, {
	  style: 'currency',
	  currency,
	}).format(roundedPrice);
  
	// Replace the default currency symbol with "NGN"
	return formattedPrice.replace(/\u20A6|₦/, 'NGN ');
  };
  