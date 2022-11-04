const getQuote = async () => {
  const res = await fetch('https://random-math-quote-api.herokuapp.com/').then(((data) => data.json()));
  return res;
};

export default getQuote;
