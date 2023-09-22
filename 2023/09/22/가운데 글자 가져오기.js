// 단어 s가 주어질 때 단어의 가운데 글자를 반환하는 문제입니다.
// 단어의 길이가 짝수 또는 홀수인가를 판변해
// 짝수라면 단어의 길이 / 2 - 1부터 2단어를 반환하고
// 홀수라면 단어의 길이 / 2의 정수부 부터 1단어를 반환합니다.

function solution(s) {
    return s.length % 2 === 0
        ? s.substr(s.length / 2 - 1, 2)
        : s.substr(Math.floor(s.length / 2), 1);
}
