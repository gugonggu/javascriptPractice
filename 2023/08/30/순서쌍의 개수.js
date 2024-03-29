// 자연수 n이 주어졌을 때 수 숫자의 곱이 n인 자연수 순서쌍의 개수를 반환하는 문제였습니다.
// 문제의 제목인 순서쌍에 집중해서 문제를 푸려면 엄청 복잡해지고 어려워지기 때문에
// 같은 답을 구할 수 있는 n의 약수를 구한다면 문제가 쉬워집니다.
// 따라서 0부터 n까지 for 문을 돌려서 n을 i로 나눈 나머지가 0이라면 answer에 1을 더해서 반환합니다.

function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            answer++;
        }
    }
    return answer;
}
