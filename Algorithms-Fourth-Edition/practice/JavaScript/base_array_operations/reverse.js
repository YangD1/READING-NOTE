// 颠倒数组元素数据
(function() {
  const a = [0, 1, 2, 5, 6, 3];
  const N = a.length;
  const old_array = [...a];

  for (let i = 0; i < N/2; i++) {
    const temp = a[i];
    a[i] = a[N-1-i];
    a[N-i-1] = temp;
  }
  
  console.log('The old array is: ');
  console.log(old_array);
  console.log('The reverse array is: ');
  console.log(a);
}())