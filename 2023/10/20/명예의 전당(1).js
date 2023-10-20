// 명예의 전당 자리 개수인 k와 1일부터 마지막 날까지 가수들의 점수 배열인 score가 주어졌을 때
// 매일마다 명예의 전달 마지막 자리의 점수를 담은 배열을 반환하는 문제입니다.

// 명예의 전당을 의미하는 배열인 rank를 생성하고
// for문을 통해 score를 순회합니다.
// 루프를 돌 때 마다 rank의 길이를 검사해 새로운 요소를 추가할지 말지 결정하고,
// 명예의 전당 마지막 요소를 검사해서 새로 추가할 요소보다 작으면 마지막 요소를 교체합니다.
// 추가, 삭제 작업이 끝나면 명예의 전당을 내림차순으로 정렬하고, 마지막 요소를 모아서 반환하기 위해 answer에 추가합니다.

function solution(k, score) {
    var answer = [];
    let rank = [];
    for (let i = 0; i < score.length; i++) {
        if (!(rank.length === k)) {
            rank.push(score[i]);
        }
        if (rank[k - 1] < score[i]) {
            rank[k - 1] = score[i];
        }
        rank = rank.sort((a, b) => b - a);
        answer.push(rank[rank.length - 1]);
    }
    return answer;
}
