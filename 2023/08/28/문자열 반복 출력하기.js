// 문자열 my_string과 정수 n이 주어졌을 때
// 문자열 요소를 n번 반복한 문자열을 반환하는 문제였습니다.
// 문자열을 배열로 변환시킨 뒤 각각의 요소를 n번 반복해 answer에 추가해서 반환해주었습니다.

function solution(my_string, n) {
    var answer = "";
    my_string = my_string.split("");
    for (let i in my_string) {
        answer += my_string[i].repeat(n);
    }
    return answer;
}
