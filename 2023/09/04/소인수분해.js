// 자연수 n이 주어졌을 때, n의 소인수를 오름차순으로 담은 배열을 반환하는 문제였습니다.
// 나누는 숫자를 2로 초기화 한뒤 n이 2보다 크거나 같을 때 까지 while문을 돌립니다.
// 만약 n이 나누는 숫자로 나누어 떨어지면 나누는 숫자는 n의 소수이기 때문에 answer에 추가하고 n을 나누는 숫자로 나눕니다.
// n이 나누는 숫자로 나누어 떨어지지 않으면 나누는 숫자를 1증가 시킵니다.
// 작업이 다 끝나면 소인수를 오름차순으로 반환하기 위해
// 중복을 없애는 set으로 변환시켰다가 정렬하기위해 다시 배열로 변환시켜 정렬해 반환했습니다.

function solution(n) {
    var answer = [];
    let divideNum = 2;
    while (n >= 2) {
        if (n % divideNum === 0) {
            answer.push(divideNum);
            n /= divideNum;
        } else {
            divideNum++;
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b);
}
