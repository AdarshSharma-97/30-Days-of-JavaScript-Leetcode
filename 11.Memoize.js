// 2623. Memoize
function memoize(fn) {
  const cac = new Map();

  return function (...args) {
    const key = args.toString();
    if (cac.has(key)) {
      return cac.get(key);
    } else {
      const result = fn(...args);
      cac.set(key, result);
      return result;
    }
  };
}
