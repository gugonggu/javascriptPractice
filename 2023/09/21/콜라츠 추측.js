// 주어진 수가 짝수라면 2로 나누고, 홀수라면 3을 곱하고 1을 더하는 작업을 계속 반복하면 1이 된다는 추측을 구현해보는 문제입니다.
// count가 500보다 커지면 종료합니다

function solution(num) {
    let count = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num *= 3;
            num++;
        }
        count++;
        if (count > 500) break;
    }
    return count > 500 ? -1 : count;
}
