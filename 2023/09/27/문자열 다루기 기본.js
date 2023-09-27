// 문자열 s의 길이가 4 혹은 6, 숫자로만 구성되어있는지 확인하는 문제입니다.

// 아래 코드는 첫 번째 풀이인데, 자바스크립트는 0x16, 3e10과 같이 문자가 들어가도 숫자로 인식되는 경우가 있어서 아래 코드가 통과되지 않았습니다.

function solution(s) {
    return !isNaN(Number(s)) && (s.length === 4 || s.length === 6)
        ? true
        : false;
}

// 다음 코드로 해결할 수 있었습니다.
// 삼항연산자를 이용해 문자열의 길이가 4 또는 6인지 판별하고
// forEach를 통해 문자열을 순회하면서 각 요소가 숫자인지 판별합니다.
function solution(s) {
    let answer = true;
    answer = s.length === 4 || s.length === 6 ? true : false;
    if (!answer) return answer;
    [...s].forEach((v) => {
        if (isNaN(v)) {
            answer = false;
            return;
        }
    });
    return answer;
}
