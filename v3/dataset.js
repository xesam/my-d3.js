'use strict'
function random_ints(count = 10, ...limits) {
  let ret = [];
  for (let i = 0; i < count; i++) {
    let val = limits.map(function(item) {
      let min = item[0] || 0;
      let max = item[1] || 100;
      let delta = max - min;
      return Math.floor(Math.random() * delta) + min;
    });
    ret.push(val);
  }
  return ret;
}
