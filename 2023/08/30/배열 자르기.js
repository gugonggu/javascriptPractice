// 정수 배열 numbers가 주어졌을 때 num1번 째 인덱스부터 num2번 째 인덱스 까지 자른
// 정수 배열을 반환하는 문제였습니다. 간단하게 slice 메서드를 이용해 풀었습니다.

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}
