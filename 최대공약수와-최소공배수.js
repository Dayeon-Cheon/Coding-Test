// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
  let gcd = 0;
  let lcm = 0;
  let answer = [];

  // 최대공약수
  for (i = m; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
      break;
    }
  }

  // 최소공배수 = 두 자연수의 곱 / 최대공약수
  lcm = (n * m) / gcd;
  answer = [gcd, lcm];

  return answer;
}
