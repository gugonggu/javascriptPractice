// 정수 배열 numbers가 주어질 때 numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 반환하는 문제입니다.
// numbers를 오름차순으로 정렬한 뒤
// 0번째와 1번째 인덱스를 곱한 것(마이너스 * 마이너스)과 길이 - 2번째와 길이 - 1번째를 곱한 것(플러스 * 플러스)를 비교해서 더 큰값을 반환합니다.

function solution(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    const plus = numbers[numbers.length - 2] * numbers[numbers.length - 1];
    const minus = numbers[0] * numbers[1];
    return plus > minus ? plus : minus;
}
