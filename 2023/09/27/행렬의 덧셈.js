// 2개의 행렬 arr1과 arr2를 받았을 때 행렬의 덧셈을 하는 문제입니다.
// map 메서드를 2번 사용해서 문제를 해결했습니다.

function solution(arr1, arr2) {
    return arr1.map((v, i) => v.map((v2, j) => v2 + arr2[i][j]));
}
