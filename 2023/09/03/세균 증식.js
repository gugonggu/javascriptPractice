// 1시간에 두 배 만큼 증식하는 세균의 처음 마리수 n과 경과한 시간 t가 주어졌을 때
// t시간 후 세균의 수를 반환하는 문제입니다.
// for 반복문을 통해 n을 2로 곱해서 n을 반환했습니다,

function solution(n, t) {
    for (let i = 0; i < t; i++) {
        n *= 2;
    }
    return n;
}

// 비트연산자로 아래와 같이 문제를 풀 수 있습니다.
function solution(n, t) {
    return n << t;
}
