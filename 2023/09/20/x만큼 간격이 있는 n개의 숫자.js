// 정수 x와 자연수 n이 주어질 때 x부터 시작해 x씩 증가하는 숫자를 n개를 지닌 배열을 반환하는 문제입니다
//for문을 사용해 i를 x만큼 증가시키면서 answer의 길이가 n이 된다면 중단합니다.
//for문을 돌면서 i를 answer에 계속 추가합니다.

function solution(x, n) {
    var answer = [];
    for (let i = x; answer.length < n; i += x) {
        answer.push(i);
    }
    return answer;
}
