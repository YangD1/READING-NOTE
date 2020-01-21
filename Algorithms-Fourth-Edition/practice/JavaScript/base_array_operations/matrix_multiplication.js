// 矩阵相乘
(function(){
  const a = [
    [1, 3, 2, 1],
    [7, 5, 1, 7],
    [1, 2, 3, 9],
    [2, 3, 1, 2]
  ];
  const b = [
    [6, 8, 2, 2],
    [4, 2, 2, 8],
    [2, 3, 1, 2],
    [7, 5, 1, 7]
  ];
  const N = a.length;

  let c = [];
  for (let i = 0; i < N; i++){
    c[i] = []; // 需要先声明
    for (let j = 0; j < N; j++) {
      c[i][j] = 0; // 需要先声明
      for (let k = 0; k < N; k++)
        c[i][j] += a[i][k]*b[k][j];
    }
  }
  console.log('Result: ')
  console.log(c)
}())