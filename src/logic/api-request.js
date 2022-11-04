const getQuote = async (controller = null) => {
  let res;
  if (controller) {
    res = await fetch('https://random-math-quote-api.herokuapp.com/', { signal: controller.signal }).then(((data) => data.json()));
  } else {
    res = await fetch('https://random-math-quote-api.herokuapp.com/').then(((data) => data.json()));
  }
  return res;
};

export default getQuote;
