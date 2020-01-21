// max in array
(function() {
  const a = [0, 1, 2, 5, 6, 3];
  let max = a[0];
  for(let i = 1; i < a.length; i++) {
    if(a[i] > max) max = a[i]
  }
  console.log('The max number is: ' + max)
}())