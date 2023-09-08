// 배열 s1과 s2가 주어질 때 두 배열에서 같은 원소의 개수를 반환하는 문제입니다.
// s1에 대해 map을 돌려서 s2가 같은 요소를 갖고 있으면 answer을 증가시켜서 중복 개수를 반환했습니다.

function solution(s1, s2) {
    var answer = 0;
    s1.map((v) => {
        if (s2.includes(v)) answer++;
    });
    return answer;
}

// filter를 사용하면 더 간단하게 풀 수 있습니다.
function solution(s1, s2) {
    return s1.filter((v) => s2.includes(v)).length;
}
