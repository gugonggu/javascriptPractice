// 문자열 my_string과 문자 letter가 주어졌을 때
// my_string에서 letter를 제거한 문자열을 반환하는 문제입니다.

// 스프레드 문법으로 문자열을 배열로 변환시킨 뒤 filter 메서드를 통해
// 배열에서 letter 문자를 제거합니다
// 그 뒤 join을 이용해 배열을 다시 문자열로 변환시켜 반환했습니다.

function solution(my_string, letter) {
    return [...my_string].filter((v) => v !== letter).join("");
}
