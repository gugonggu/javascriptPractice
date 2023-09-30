// 숫자로 이루어진 문자열 t와 p가 주어질 때
// t에서 p와 길이가 같은 부분 문자열 중에서 해당 부분 문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 부분 문자열의 개수를 반환하는 문제입니다.
// 큐를 만들고 for문을 돌 때마다 t의 i번째 요소를 큐에 넣습니다.
// 만약 큐의 길이가 p의 길이와 같다면 큐가 나타내는 수와 p가 나타내는 수를 비교해 작거나 같다면 answer을 증가시켰습니다.
// 비교후에는 큐에서 맨 앞의 요소를 빼줬습니다.

function solution(t, p) {
    var answer = 0;
    let queue = [];
    t = [...t];
    const compareNum = p.length;
    p = Number(p);
    for (let i = 0; i < t.length; i++) {
        queue.push(t[i]);
        if (queue.length === compareNum) {
            if (Number(queue.join("")) <= p) answer++;
            queue.shift();
        }
    }
    return answer;
}
