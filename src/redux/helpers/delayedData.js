const getData = (data, seconds = 5) => new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve(data);
    }, seconds * 1000);
  },
);

export default getData;
