// 배열의 모든 요소를 두 배한 배열을 반환하는 문제였습니다.
// map을 이용해 모든 요소를 2로 곱하여 반환했습니다.

function solution(numbers) {
    return numbers.map((v) => (v *= 2));
}
