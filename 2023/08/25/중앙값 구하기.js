// 주어진 요소의 갯수가 홀수인 배열을 오름차순으로 정렬하고 중앙값을 반환하는 문제였습니다.

// 배열을 오름차순으로 정렬하고
// 배열 전체 길이 / 2의 정수부를 구해서
// 중앙 요소 값을 반환했습니다.

function solution(array) {
    array.sort((a, b) => a - b);
    return array[Math.floor(array.length / 2)];
}
