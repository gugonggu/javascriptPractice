// 전화번호를 의미하는 문자열 phone_number이 주어질 때 뒷 4자리를 제외한 나머지 숫자롤 전부 *로 가린 문자열을 반환하는 문제입니다.
// 배열로 변환시킨 phone_number을 map 메서드를 이용해 변환시킵니다
// 마지막으로 join을 이용해 다시 문자열로 변환시켜 반환했습니다.

function solution(phone_number) {
    return [...phone_number]
        .map((v, i) => (i < phone_number.length - 4 ? "*" : v))
        .join("");
}
