// 숫자 배열 arr와 divisor가 주어질 때 배열의 요소가 divisor로 나누어 떨어지는 것만 담은 오름차순 배열을 반환하는 문제입니다.
// arr에 필터를 사용해 divisor로 나누었을 때 나누어 떨어지는 것만 담고, sort를 이용해 오름차순으로 정렬했습니다
// 마지막으로 arr의 길이를 검사해서 길이가 0이라면 -1을 담은 배열을, 그렇지 않다면 arr 자체를 반환했습니다.

function solution(arr, divisor) {
    arr = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
    return arr.length === 0 ? [-1] : arr;
}

// 메모리 낭비를 방자하기 위해 정렬을 길이를 검사하고 난 뒤에 할 수 있습니다.
function solution(arr, divisor) {
    arr = arr.filter((v) => v % divisor === 0);
    return arr.length === 0 ? [-1] : arr.sort((a, b) => a - b);
}
