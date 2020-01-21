// 复制数组
(function(){
  const a = [0, 1, 2, 5, 6, 3];
  const N = a.length;
  let b = new Array(); // or '[]', 所谓字面量声明
  for (let i = 0; i < N; i++) {
    b[i] = a[i];
  }

  console.log('The new array name is "b": ');
  console.log(b);
  console.log('Array b copy from array "a" :');
  console.log(a);
}())