// 두 정수 num과 total이 주어질 때 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 반환하는 문제입니다.
// while문을 제어하기 위한 isCorrect와 for문을 제어하기 위한 startNum을 선언해줍니다
// isCorrect가 false일 때 까지 계속 while문을 돌립니다
// for문을 통하여 statNum 부터 startNum - num이 될 때까지 i를 내림차순으로 넣습니다
// for문을 통해 구한 answer 배열의 모든 요소의 합이 total과 같다면 isCorrect를 true로 바꿔서 while문을 탈출한 뒤 배열을 뒤집어서 반환하고
// total과 같지 않다면 temp와 anser을 초기화하고 startNum을 1 줄입니다.

function solution(num, total) {
    var answer = [];
    let isCorrect = false;
    let startNum = total + num;
    while (isCorrect === false) {
        for (let i = startNum; i > startNum - num; i--) {
            answer.push(i);
        }

        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += answer[j];
        }

        if (temp === total) {
            isCorrect = true;
        } else {
            temp = 0;
            answer = [];
            startNum--;
        }
    }
    return answer.reverse();
}

// 가우스 공식을 활용해서 문제를 더 간단하게 풀 수 있습니다.
function solution(num, total) {
    const a = ((2 * total) / num + 1 - num) / 2;
    return Array(num)
        .fill()
        .map((_, i) => i + a);
}
