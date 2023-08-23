// num1을 num2로 나눈 값에 1,000을 곱한 수를 반환하는 문제였습니다.
// 곱한 수의 정수 부분을 반환하는 문제였기 때문에, 연산 결과에 Math.floor()함수를 사용했습니다.

function solution(num1, num2) {
    return Math.floor((num1 / num2) * 1000);
}
