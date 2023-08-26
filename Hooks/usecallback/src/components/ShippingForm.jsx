import { memo, useState } from 'react';

export default memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  console.log('[artifically slow] Rendering <ShippingForm>')
  let startTime = performance.now()

  while(performance.now() - startTime < 1000){
    // do nothing for 500ms to emulate slow code
  }
  console.log("late")
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    }
    onSubmit(orderDetails)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <b>
            Note: <code>ShippingForm</code> is artifically slowed down!
          </b>
        </p>
        <label>
          Number of items:
          <button type='button' onClick={() => setCount(() => count - 1)}>
            -
          </button>
          {count}
          <button type='button' onClick={() => setCount(() => count + 1)}>
            +
          </button>
        </label>
        <label>
          {' '}
          Street:
          <input name='street' type='text' />
        </label>
        <label>
          City:
          <input name='city' type='text' />
        </label>
        <label>
          Postal code:
          <input name='zipCode' type='text' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
});
