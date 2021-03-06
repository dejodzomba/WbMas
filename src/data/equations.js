export const getMean = function (data) {
  return (
    data.reduce(function (a, b) {
      return Number(a) + Number(b);
    }) / data.length
  );
};

export const getSD = function (data) {
  let m = getMean(data);
  return Math.sqrt(
    data.reduce(function (sq, n) {
      return sq + Math.pow(n - m, 2);
    }, 0) /
      (data.length - 1)
  );
};
