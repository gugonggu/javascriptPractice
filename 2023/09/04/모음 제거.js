// 문자열 my_string이 주어졌을 때, 문자열에서 모음을 제거한 문자열을 반환하는 문제였습니다.
// 스프레드 문법으로 문자열을 배열로 바꾼 뒤 filter를 사용해서 모음을 제거합니다.
// 그 뒤 join을 사용해 배열을 다시 문자열로 바꿔서 답을 반환했습니다.

function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    return [...my_string].filter((v) => !vowels.includes(v)).join("");
}
