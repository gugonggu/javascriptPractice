// 키가 담긴 정수 배열 array와 키 height가 주어졌을 때
// array중에 height보다 큰 값의 개수를 반환하는 문제입니다.
// array를 정렬시키고, for문울 돌립니다.
// 만약 answer가 0이 아니라면 넘어가고, 아니라면
// array의 요소를 검사해서 height보다 크면 answer에 배열의 길이 - 1을 할당합니다.

function solution(array, height) {
    var answer = 0;
    array = array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (answer !== 0) {
            continue;
        }
        if (array[i] > height) {
            answer = array.length - i;
        }
    }
    return answer;
}

// 필터를 사용해서 더 간단하게 문제를 해결할 수 있습니다.
function solution(array, height) {
    var answer = array.filter((item) => item > height);
    return answer.length;
}
