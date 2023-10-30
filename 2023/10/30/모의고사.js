// 수학문제의 답을 순서대로 담은 배열인 answers가 주어지고,
// 문제를 찍는 3 사람의 패턴은 아래 코드의 ary의 각각과 같을 때
// 가장 점수가 높은 사람을 오름차순으로 담은 배열을 반환하는 문제입니다.

// 답으로 반환할 배열에 먼저 각 사람마다 점수를 0으로 초기화 시키고
// for문으로 ary를 순회합니다
// 각 찍기 패턴마다 for문을 통해 answers를 순회해서
// 각 자리에 맞는 답이 맞는지 검사하여, 맞다면 점수를 증가시킵니다.
// 모든 for문이 다 끝나면 답을 조건에 맞게 반환하도록 배열을 sort, filter, map을 사용해 변형시킨 뒤 반환했습니다.

function solution(answers) {
    let answer = [
        [1, 0],
        [2, 0],
        [3, 0],
    ];
    const ary = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    for (let i = 0; i < ary.length; i++) {
        for (let j = 0; j < answers.length; j++) {
            const guessLength = i === 0 ? 5 : i === 1 ? 8 : 10;
            answers[j] === ary[i][j % guessLength] ? answer[i][1]++ : null;
        }
    }
    return answer
        .sort((a, b) => b[1] - a[1])
        .filter((v) => answer[0][1] === v[1])
        .map((v2) => v2[0]);
}
