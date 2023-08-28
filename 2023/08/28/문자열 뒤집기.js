// 문자열 my_string이 주어졌을 때 그 문자열을 뒤집에서 반환하는 문제였습니다.
// 따라서 문자열을 배열로 변환한 뒤 reverse()를 이용해 뒤집고 join을 사용해 문자열로 변환시켜 반환했습니다.

function solution(my_string) {
    return my_string.split("").reverse().join("");
}
