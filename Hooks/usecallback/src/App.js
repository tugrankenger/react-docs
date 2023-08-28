import { useState } from 'react';
import './App.css'

import ProductPage from './components/ProductPage';
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div className='App'>
        <label>
          <input
            type='checkbox'
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />{' '}
          Dark mode
        </label>
        <hr />
        <ProductPage
          refferrerId='lost'
          productId={111}
          theme={isDark ? 'dark' : 'light'}
        />
      </div>
    </>
  );
}

export default App;
