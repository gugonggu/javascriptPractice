// 삼각형의 두 변의 길이가 담긴 배열 sides가 주어질 때
// 나머지 한 변이 될 수 있는 정수의 개수를 반환하는 문제입니다.
// 우선 주어진 배열에서 큰 수와 작은 수를 구합니다.
// 만약 주어진 배열에서 큰 수가 삼각형을 구성하는 변의 길이들 중에서 가장 긴 변일 때
// for 문에서 나머지 한 변이 될 수 있는 정수의 개수를 첫번째 for문에서 구합니다.
// 두 번째 for문에서는 주어진 배열에서 삼각형을 구성하는 세 변중 가장 긴 변이 없을 때를 가정해서
// 삼각형의 나머지 한 변이 될 수 있는 정수의 개수를 구합니다.

function solution(sides) {
    var answer = 0;
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    for (let i = max - min + 1; i <= max; i++) {
        answer++;
    }
    for (let j = max + 1; j < max + min; j++) {
        answer++;
    }
    return answer;
}
