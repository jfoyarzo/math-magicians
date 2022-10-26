import { useEffect } from 'react';
import Calculator from './components/Calculator';

function App() {
  useEffect(() => {
    document.title = 'Math Magicians';
  });
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
