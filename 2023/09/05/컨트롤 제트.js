// 숫자와 Z가 공백으로 구분되어 담긴 문자열이 주어질 때
// 문자열에 있는 숫자를 차례대로 더하는데 Z가 나오면 Z 이전의 숫자를 빼고 모든 연산을 완료한 값을 반환하는 문제입니다.

// 우선 문자열 s를 split(" ")을 이용해 공백으로 구분해서 배열로 만들어 줬고,
// map을 이용해 모든 요소를 순회하며 요소가 숫자라면 answer을 요소만큼 더하고
// 숫자가 아니라면 i - 1의 값을 빼줍니다.

function solution(s) {
    var answer = 0;
    s.split(" ").map((v, i, a) => {
        if (!isNaN(v)) {
            answer += Number(v);
        } else {
            answer -= Number(a[i - 1]);
        }
    });
    return answer;
}
