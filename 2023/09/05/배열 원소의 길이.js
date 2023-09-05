// 문자열 배열 strlist가 주어졌을 때 각 원소의 길이를 담은 배열을 반환하는 문제입니다.
// map을 사용해 각 요소를 그 요소의 길이로 바꿔주었습니다.

function solution(strlist) {
    return strlist.map((v) => v.length);
}
