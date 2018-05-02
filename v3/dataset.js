"use strict";
function random_ints(count = 10, ...domains) {
  let ret = [];
  for (let i = 0; i < count; i++) {
    let val = domains.map(function(item) {
      let min = item[0] || 0;
      let max = item[1] || 100;
      let delta = max - min;
      return Math.floor(Math.random() * delta) + min;
    });
    ret.push(val);
  }
  return ret;
}

let ints_1_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
