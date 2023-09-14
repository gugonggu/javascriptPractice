// 두 정수 a, b가 주어질 때 a/b가 유한소수이면 1을, 무한소수이면 2를 반환하는 문제입니다.
// for문 제한을 위해 a와 b의 복사본을 남겨놓고 for문을 통해 기약분수가 될 때 까지 나눕니다.
// 기약분수가 된 분모의 소인수가 2와 5만 존재해야 유한소수가 되기 때문에
// 분모를 2와 5로 더이상 나눌 수 없을 때 까지 나누어줍니다
// 모든 계산을 다 한 다음에 분모가 1이 되면 유한소수이고, 1이 아니라면 무한소수이기 때문에
// 삼항연산자를 사용하여 답을 반환했습니다.

function solution(a, b) {
    let aCopy = a,
        bCopy = b;
    for (let i = 2; i <= a; i++) {
        if (aCopy % i === 0 && bCopy % i === 0) {
            aCopy /= i;
            bCopy /= i;
            i--;
        }
    }
    while (bCopy % 2 === 0) {
        bCopy /= 2;
    }
    while (bCopy % 5 === 0) {
        bCopy /= 5;
    }
    return bCopy === 1 ? 1 : 2;
}
