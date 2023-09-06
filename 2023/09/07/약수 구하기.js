// 정수 n이 주어질 때 n의 약수를 오름차순으로 담은 배열을 반환하는 문제입니다.
// for 반복문을 돌려 n % i의 나머지가 0인가를 체크해서 answer에 추가합니다.

function solution(n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i);
        }
    }
    return answer;
}
