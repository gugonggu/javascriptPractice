// 정수 배열 numbers가 주어졌을 때 그 배열의 평균 값을 반환하는 문제였습니다.
// reduce 함수를 이용해 모든 배열의 요소를 더하고 numbers.length로 나누어 평균을 반환했습니다.

function solution(numbers) {
    return numbers.reduce((a, c) => a + c) / numbers.length;
}
