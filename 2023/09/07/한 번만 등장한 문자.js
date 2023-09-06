// 문자열 s가 주어질 때 한 번만 등장하는 문자를 모아 반환하는 문제입니다.
// indexOf와 lastIndexOf를 사용해 한 번만 등장하는 문자를 찾고
// answer에 중복을 체크해서 answer에 없는 문자면 추가하고, 있으면 넘어갑니다
// 문제 조건에 사전 순으로 정렬해서 제출하라 해서, sort한 다음에 join해서 반환했습니다.

function solution(s) {
    var answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            if (answer.includes(s[i])) {
                continue;
            } else {
                answer.push(s[i]);
            }
        }
    }
    return answer.sort().join("");
}
