// 양의 정수 x가 주어질 때
// x의 각 자릿수의 합으로 x가 나누어지면 true를, 나누어 떨어지지 않으면 false를 반환하는 문제입니다.
// 숫자를 문자열로 변환시키고 다시 배열로 변환시킨 뒤 각 요소롤 정수로 변환시켜 누산합니다.
// x를 spreadNum으로 나눴을때 나누어 떨어지면 true를, 그렇지 않으면 false를 반환했습니다.

function solution(x) {
    const spreadNum = [...x.toString()].reduce((a, c) => a + Number(c), 0);
    return x % spreadNum === 0 ? true : false;
}
