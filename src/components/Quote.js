import React, { useEffect, useState } from 'react';
import getQuote from '../logic/api-request';

const Quote = () => {
  const [display, setDisplay] = useState({ quote: '', author: '' });
  const { quote, author } = display;

  useEffect(() => {
    const controller = new AbortController();
    getQuote(controller).then((data) => setDisplay({ quote: data.quote, author: data.author }));
    return () => controller.abort();
  }, []);

  const handleClick = () => {
    getQuote().then((data) => setDisplay({ quote: data.quote, author: data.author }));
  };
  return (
    <div className="container">
      <div className="quote-wrapper">
        <h2>
          &quot;
          {quote}
          &quot;
        </h2>
        <p>
          -
          {' '}
          <i>{author}</i>
        </p>
      </div>
      <button type="button" onClick={handleClick}>Get a new Quote</button>
    </div>
  );
};

export default Quote;
