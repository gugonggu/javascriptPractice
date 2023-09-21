// 배열 arr이 주어질 때 제일 작은 수를 제거한 배열을 반환하는 문제입니다.
// 배열이 비어있을 때는 -1을 담은 배열을 반환해야하니 삼항연산자를 사용해서 원본 배열의 길이가 1일 때를 예외처리 해주었습니다.

function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter((v) => v !== Math.min(...arr));
}
