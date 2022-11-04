const getQuote = async (controller) => {
  const res = await fetch('https://random-math-quote-api.herokuapp.com/', { signal: controller.signal }).then(((data) => data.json()));
  return res;
};

export default getQuote;
