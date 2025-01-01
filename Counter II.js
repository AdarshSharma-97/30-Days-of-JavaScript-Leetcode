//Day 4

var createCounter = function (init) {
  let currentCount = init;
  return {
    increment: function () {
      return (currentCount += 1);
    },

    decrement: function () {
      return (currentCount -= 1);
    },

    reset: function () {
      return (currentCount = init);
    },
  };
};
