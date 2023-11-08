// 게임의 전체 스테이지 개수 N과 사용자가 현재 멈춰있는 스테이지를 담은 정수 배열 stages가 주어질 때
// 각 스테이지의 실패율 (도달했으나 클리어 못한 사용자 수 / 스테이지에 도달한 사용자 수)이
// 높은 스테이지부터 내림차순으로 스테이지의 번호를 담은 배열을 반환하는 문제입니다.

// 우선 전체 스테이지가 N일 때 N번째 스테이지를 클리어했다는 의미로 stages에 N + 1 숫자가 들어있기 때문에
// answer 배열을 N + 1 크기로 선언하고 0으로 초기화해주었습니다.
// 그 후 for문을 통해 answer에 각 스테이지를 클리어한 사용자 수를 넣어주고,
// answer을 map을 통해 실패율로 변환하여 다시 넣어주었습니다.
// 그 후 while문을 통해 answer에 담겨있는 모든 실패율을 순회하면서
// 각 실패율의 index + 1(스테이지)를 반환하기 위한 배열인 ret에 담아서 반환해 주었습니다.

function solution(N, stages) {
    var answer = new Array(N + 1).fill(0);
    for (let i = 0; i < stages.length; i++) {
        for (let j = 0; j < stages[i] - 1; j++) {
            answer[j]++;
        }
    }
    answer.pop();
    let length = stages.length;
    answer = answer.map((v) => {
        let temp = length;
        length = v;
        return isNaN((temp - v) / temp) ? 0 : (temp - v) / temp;
    });
    let ret = [];
    while (Math.max(...answer) !== -1) {
        const index = answer.indexOf(Math.max(...answer));
        ret.push(index + 1);
        answer[index] = -1;
    }
    return ret;
}
