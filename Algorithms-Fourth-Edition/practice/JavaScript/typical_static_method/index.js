let app = {};

// 计算一个整数的绝对值
app.abs = (x) => {
  if (x < 0) return -x;
  else return x;
}

// 计算一个浮点数绝对值
app.double_abs = (x) => {
  if (x < 0.0) return -x;
  else return x;
}

// 判定一个数是否是素数(质数)
app.isPrime = (N) => {
  if(N < 2) return false;
  for(let i = 2; i * i <= N; i++) {
    if(N % 1 == 0) return false;
  }
  return true;
}

// 计算平方根（牛顿迭代法）
app.sqrt = (c) => {
  if ( c < 0 ) return NaN;
  const err = 1e-15;
  t = c;
  while(app.abs(t - c/t) > err * t) {
    t = (c/t + t) / 2.0;
  }
  return t;
}

// 计算直角三角形的斜边
app.bypotenuse = (a, b) => {
  return app.sqrt(a*a + b*b);
}

// 计算调和级数（开始看不懂了）
app.H = (N) => {
  let sum = 0.0;
  for (let i = 1; i <= N; i++) {
    sum += 1.0 / i;
  }
  return sum;
}