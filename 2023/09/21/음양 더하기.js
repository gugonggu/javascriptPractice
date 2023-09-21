// 절댓값을 담은 배열 absolutes와 부호를 담은 signs가 주어질 때
// 절댓값과 부호를 조합한 요소들의 합을 구하는 문제입니다
// map을 사용해 부호를 조합해주고 reduce를 사용해 모두 합해줬습니다.

function solution(absolutes, signs) {
    return absolutes
        .map((v, i) => (signs[i] ? v : v * -1))
        .reduce((a, c) => a + c);
}
