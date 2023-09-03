// 영어 대소문자로 이루어진 문자열 my_string이 주어질 때
// 문자열을 모두 소문자로 바꾸고 알파벳 순서로 정렬한 문자열을 반환하는 문제입니다.
// 스프레드 연산자로 모두 소문자로 바꾼 문자열을 배열로 바꾸고 sort로 정렬을 한 뒤
// 다시 문자열로 만들이 반환했습니다.

function solution(my_string) {
    return [...my_string.toLowerCase()].sort().join("");
}
