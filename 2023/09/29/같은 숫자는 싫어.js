// 배열 arr가 주어질 때 숫자가 연속으로 나타나면 하나만 남기고, 제거된 남은 수를 반환하는 문제입니다.
// for문 통해 arr을 순회하면서 answer의 마지막 요소와 비교해 문제를 해결했습니다.

function solution(arr) {
    var answer = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === answer[answer.length - 1]) {
            continue;
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}
