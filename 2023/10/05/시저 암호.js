// 문자열 s와 숫자 n이 주어질 때
// 만약 문자가 AB라면 1만큼 밀어서 BC를 반환시키는 문제입니다.
// 문자열 s를 아스키코드로 변환시킨 후
// for문을 통해 스페이스를 제외한 아스키 코드는 증가시킵니다
// 만약 Z 또는 z라면 각각 A, a로 변환시킵니다
// 아스키코드 배열 s를 다시 각각의 아스키 코드에 맞는 문자열로 변환시킨뒤 반환해주었습니다.

function solution(s, n) {
    s = [...s].map((v) => v.charCodeAt());
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < n; j++) {
            if (s[i] === 90) {
                s[i] = 64;
            } else if (s[i] === 122) {
                s[i] = 96;
            } else if (s[i] === 32) {
                continue;
            }
            s[i]++;
        }
    }
    return s.map((v) => String.fromCharCode(v)).join("");
}
