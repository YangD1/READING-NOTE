// 计算数组元素的平均值
(function(){
  const a = [0, 1, 2, 5, 6, 3];
  const N = a.length;
  let sum = 0.0;
  for (let i = 0; i < N ; i++)
    sum += a[i];
  average = sum / N;
  console.log('The average number is : ' + average);
}())