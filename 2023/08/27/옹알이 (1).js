// 문자열 배열이 주어졌을 때, "aya", "ye", "woo", "ma"로만 조합할 수 있는 문자열의 갯수를 반환하는 문제였습니다.
// 정규표현식 배열을 만들어서 주어진 문자열 배열에다가 보든 정규표현식을 비교해서 X로 대체합니다.
// 대체한 X를 다시 공백으로 대체하면 "aya", "ye", "woo", "ma"로만 이루어진 문자열을 판별할 수 있습니다.
// 따라서 공백으로 대체한 문자열의 길이가 0이면 answer을 1더해서 answer을 반환합니다.

function solution(babbling) {
    var answer = 0;
    const regexAry = [/aya/, /ye/, /woo/, /ma/];
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < regexAry.length; j++) {
            babbling[i] = babbling[i].replace(regexAry[j], "X");
        }
        babbling[i] = babbling[i].replace(/X/g, "");
        if (babbling[i].length === 0) answer++;
    }

    return answer;
}
