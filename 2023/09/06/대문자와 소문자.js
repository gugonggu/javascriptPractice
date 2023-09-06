// 문자열 my_string이 주어질 때, 소문자를 대문자로, 대문자를 소문자로 변환한 문자열을 반환하는 문제입니다.
// 문자열을 스프테드 연산자를 사용해 배열로 변환하고, map을 사용하 각 요소마다 대문자, 소문자를 반펼하여 변환합니다.
// 마지막으로 join을 사용해 배열을 문자열로 변환시켜준 뒤 답을 반환했습니다.

function solution(my_string) {
    return [...my_string]
        .map(
            (v) =>
                (v = v !== v.toUpperCase() ? v.toUpperCase() : v.toLowerCase())
        )
        .join("");
}
