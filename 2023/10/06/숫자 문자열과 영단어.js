// 문자열 s가 주어질 때
// 문자열 중에 영단어로 표현되어있는 숫자를 모두 그에 맞는 숫자로 변경한 뒤, 모든 숫자를 모아 하나의 숫자를 반환하는 문제입니다.

// numAry를 만들어서 문자에 맞는 인덱스를 활용해서 문제를 해결했습니다.

function solution(s) {
    const numAry = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let answerAry = [];
    let queue = [];
    s = [...s];
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            answerAry.push(s[i]);
        } else {
            queue.push(s[i]);
            const tmp = numAry.indexOf(queue.join(""));
            if (tmp !== -1) {
                answerAry.push(tmp);
                queue = [];
            }
        }
    }
    return Number(answerAry.join(""));
}
