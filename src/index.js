module.exports = function reverse (n) {
    let resultArr = [];
    let strFromNumber =`${n > 0? n.toString(): (n * -1).toString()}`
  
    for(let i = strFromNumber.length - 1; i >= 0; i--) {
      resultArr.push(strFromNumber[i]);
      console.log(strFromNumber[i]);
    }
     return +resultArr.join('');
}
