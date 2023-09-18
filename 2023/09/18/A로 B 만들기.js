// 문자열 before과 after이 주어졌을 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 반환하는 문제입니다.
// 순서를 바꿔서 만들 수 있다는 의미는 문자열을 구성하는 문자들의 개수가 같다는 의미입니다.
// 따라서 before과 after를 배열로 만들고, 정렬해줬습니다
// for문을 통해 before과 after를 순회하는데
// 만약 같은 순서의 요소가 같다면 answer을 1로 바꾸고, 다르다면 0으로 바꿉니다.
// for문 내부에서 answer을 검사해서 answer이 0이라면 break합니다.
// 따라서 마지막으로 변경된 answer를 반환합니다.

function solution(before, after) {
    var answer = 0;
    before = [...before].sort();
    after = [...after].sort();
    for (let i = 0; i < before.length; i++) {
        answer = before[i] === after[i] ? 1 : 0;
        if (answer === 0) {
            break;
        }
    }
    return answer;
}
