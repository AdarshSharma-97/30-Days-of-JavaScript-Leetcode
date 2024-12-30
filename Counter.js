//2620. Counter

var createCounter = function (n) {
  console.log(n);
  return function () {
    return n++;
  };
};
