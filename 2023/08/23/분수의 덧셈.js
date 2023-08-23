// 두 분수가 주어졌을 때 분수를 더한 기약분수를 반환하는 문제였습니다.

// 첫 번째 풀이입니다.
// 기약분수의 개념을 잊어버렸어서 i의 제한을 10까지 뒀었습니다.
// 정확성은 66.7 %가 나왔었습니다.
function solution(numer1, denom1, numer2, denom2) {
    var answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    for (let i = 2; i < 10; i++) {
        if (answer[0] % i === 0 && answer[1] % i === 0) {
            answer[0] /= i;
            answer[1] /= i;
        }
    }

    return answer;
}

// 기약분수는 2부터 분모의 수까지 모든 수로 분자와 분모를 둘 다 나눌 수 없을 때
// 성립되는 것을 기억해내서 제한을 분모의 수로 바꿨습니다.
// 정확성은 86.7 % 가 나왔었습니다.
function solution(numer1, denom1, numer2, denom2) {
    var answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    for (let i = 2; i <= denom1 * denom2; i++) {
        if (answer[0] % i === 0 && answer[1] % i === 0) {
            answer[0] /= i;
            answer[1] /= i;
        }
    }

    return answer;
}

// for 반복을 작은 수 부터 시작했을 때, 큰 수로 나누고도 작은 수로 또 나눌 수 있기 때문에
// 반례가 있었습니다.
// 따라서 for 반복을 큰 수 부터 시작해서 반례를 없앴습니다.
function solution(numer1, denom1, numer2, denom2) {
    var answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    for (let i = denom1 * denom2; i > 1; i--) {
        if (answer[0] % i === 0 && answer[1] % i === 0) {
            answer[0] /= i;
            answer[1] /= i;
        }
    }

    return answer;
}
