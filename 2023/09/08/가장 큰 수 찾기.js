// 정수 배열 array가 주어질 때
// 배열중에 가장 큰 수와 그 수의 인덱스를 담은 배열을 반환하는 문제였습니다.
// 저는 map을 통해 array를 순회하여 가장 큰 수와 그 인덱스를 찾았지만

function solution(array) {
    var answer = [0, 0];
    array.map((v, i) => {
        if (v > answer[0]) {
            answer[0] = v;
            answer[1] = i;
        }
    });
    return answer;
}

// 아래 코드를 사용하여 더 간단한게 문제를 풀 수도 있습니다.
function solution(array) {
    return [Math.max(...array), array.indexOf(Math.max(...array))];
}
