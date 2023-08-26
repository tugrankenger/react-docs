import { useCallback } from 'react';
import ShippingForm from './ShippingForm';

function ProductPage({ refferrerId, productId, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post('/product/' + productId + '/buy', {
        refferrerId,
        orderDetails,
      });
    },
    [productId, refferrerId]
  );
  return (
    <div className={theme}>
      <ShippingForm onSubmit = {handleSubmit}/>
    </div>
  );
}

function post(url, data) {
  // fake fetch
  console.log('POST/' + url);
  console.log('data: ', data);
}

export default ProductPage;
