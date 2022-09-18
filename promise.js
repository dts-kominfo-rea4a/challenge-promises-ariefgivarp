const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const theaters = [...theaterIXX, ...theaterVGC];
  let count = 0;
  theaters.forEach((item) => {
    if(item.hasil === emosi){
      count++;
    }
  })
  return count;
};
module.exports = {
  promiseOutput,
};
