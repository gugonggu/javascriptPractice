// 정수 배열 numbers와 문자열 direction이 주어질 때
// direction이 right이면 배열 요소를 오른쪽으로 한 칸씩 이동시키고
// left면 배열 요소를 왼쪽으로 한 칸씩 이동시킨 후 numbers를 반환합니다.

function solution(numbers, direction) {
    if (direction === "right") {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    return numbers;
}
