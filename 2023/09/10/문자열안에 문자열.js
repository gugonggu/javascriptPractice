// 문자열 str1, str2가 주어질 때
// str1에 str2가 있다면 1을, 없다면 2를 반환하는 문제입니다.
// str2를 정규표현식으로 만들어서
// str1에 정규표현식을 테스트해서 있으면 1을, 없으면 2를 반환했습니다.

function solution(str1, str2) {
    const regex = new RegExp(str2);
    return regex.test(str1) ? 1 : 2;
}

// str1을 str2로 나누어서 문제를 해결하는 방법도 있고,
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2;
}

// indexOf를 사용하는 방법도 있으며
function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}

// includes를 활용하는 방법도 있습니다.
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}
