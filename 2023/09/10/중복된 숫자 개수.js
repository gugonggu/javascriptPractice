// 정수가 담긴 배열 array와, n이 주어질때 배열에 들어있는 n의 개수를 반환하는문제입니다.
// 배열을 n으로 필터링해서 그 길이를 반환했습니다.

function solution(array, n) {
    return array.filter((v) => v === n).length;
}
