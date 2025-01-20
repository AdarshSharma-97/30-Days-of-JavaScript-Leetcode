/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function sortBy(arr, fn) {
    return arr.sort((a, b) => {
      const fnResultA = fn(a);
      const fnResultB = fn(b);
  
      // Ascending order:
      return fnResultA - fnResultB;
    });
  }