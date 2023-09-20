// 정수 n이 주어질 때 n을 내람차순으로 바꿔서 반환하는 문제입니다.
// 정수를 문자열로 변환하고 다시 배열로 변환시킨 뒤 sort를 이용해 내림차순으로 만들고
// join을 사용해 하나의 문자열로 묶습니다, 마지막으로 문자열을 숫자로 변환해서 반환했습니다.

function solution(n) {
    return Number([...n.toString()].sort((a, b) => b - a).join(""));
}
