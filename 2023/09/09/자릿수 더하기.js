// 정수 n이 주어질 때 n의 각 자리 숫자의 합을 반환하는 문제입니다.
// n을 문자형으로 바꾸고 다시 배열로 변환합니다.
// 그 후 map을 이용해 각 요소를 다시 숫자형으로 변환하고
// reduce를 이용해서 모든 요소를 합해주었습니다.

function solution(n) {
    return [...("" + n)].map((v) => Number(v)).reduce((a, c) => a + c);
}

// 아래 코드처럼, map으로 각 요소를 숫자형으로 변환시키지 않고, reduce 내부에서 숫자형으로 더하는 것도 가능합니다.

function solution(n) {
    return [...("" + n)].reduce((a, c) => a + Number(c), 0);
}
