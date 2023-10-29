// 과일 장수가 사과를 포장하는 문제입니다.
// 사과의 최대 점수 k와 한 상자에 들어가는 사과의 개수 m, 사과들의 점수 score이 주어지고
// 한 박스의 점수는 해당 박스에 들어있는 사과의 가장 낮은 점수 * m이라 할 때 모든 사과 박스 점수들을 더한 값을 반환하는 문제입니다.

// 처음에는 아래와 같이 배열을 계속 조작하면서 문제를 풀려했지만 기본적인 실행 시간이 매우 오래 걸리고, 심지어 런타임 에러가 발생해
// 케이스중 하나를 풀 수 없었습니다.

function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let boxes = [];
    for (let i = 0; i < score.length; i += m) {
        boxes.push(score.slice(i, i + m));
    }
    return boxes
        .filter((v) => v.length === m)
        .map((v2) => Math.min(...v2) * m)
        .reduce((a, c) => a + c);
}

// 따라서 문제를 수정하여 아래와 같이 풀었습니다.
// 배열을 계속 변형시키는 대신
// 배열을 내림차순으로 정렬하고, m번째에 있는 요소들만 더해주었습니다.
function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    const box = Math.floor(score.length / m);
    for (let i = m - 1; i < box * m; i += m) {
        answer += score[i];
    }
    return answer * m;
}
