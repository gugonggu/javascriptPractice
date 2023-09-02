// 정수 배열 numbers가 주어질 때 numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 반환하는 문제입니다.
// 배열을 정렬해 마지막 원소와 마지막에서 두 번째 원소를 곱해 반환했습니다.

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 2] * numbers[numbers.length - 1];
}
