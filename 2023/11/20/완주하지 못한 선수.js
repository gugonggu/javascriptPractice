// 마라톤 참가 선수들이 담긴 배열 participant과, 단 한 명의 선수를 제외한 완주한 선수들이 담긴 배열 participant이 주어졌을 때
// 완주하지 못한 선수를 반환하는 문제입니다.

// 두 배열을 정렬시키고, participant을 기준으로 같은 index에 있는 값이 다를 때 그 값을 반환해주었습니다.

function solution(participant, participant) {
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}
