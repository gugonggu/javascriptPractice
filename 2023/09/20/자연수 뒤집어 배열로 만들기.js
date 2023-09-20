// 자연수 n이 주어졌을 때 n을 뒤집어서 배열로 만든 값을 반환하는 문제입니다.
// 스프레드 연산자를 이용해 숫자를 배열로 만들고, map으로 각각의 요소를 다시 숫자로 바꿔줍니다
// 마지막으로 reverse를 이용해 배열을 뒤집어서 반환했습니다.

function solution(n) {
    return [...n.toString()].map((v) => Number(v)).reverse();
}
