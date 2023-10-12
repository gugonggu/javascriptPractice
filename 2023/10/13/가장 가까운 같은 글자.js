// 문자열 s가 주어졌을 때
// 요소가 처음 나온 요소라면 answer 배열에 -1을 추가하고
// 이미 나왔던 요소라면 해당 요소에서 가장 가까운 곳에 있는 중복 요소와의 거리를 answer에 추가합니다.

function solution(s) {
    let answer = [];
    s = [...s];
    const test = [];
    for (let i = 0; i < s.length; i++) {
        if (test.includes(s[i])) {
            answer.push(i - s.lastIndexOf(s[i], i - 1));
        } else {
            test.push(s[i]);
            answer.push(-1);
        }
    }
    return answer;
}
