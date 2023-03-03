function findTrailingZeros(n) {
  let count = 0;

  if (n < 0)
    return -1;

  for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
    count += Math.floor(n / i);
  return count;
}

findTrailingZeros(100)

// function zeros(n) {
//   var zs = 0;
//   while (n > 0) {
//     n = Math.floor(n / 5);
//     zs += n
//   }
//   return zs;
// }