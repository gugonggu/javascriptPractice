// 정수배열 array가 주어졌을 때, 7의 개수를 반환하는 문제입니다.
// for문을 돌려 array를 순회합니다.
// array의 요소를 value1이라하고, value1을 문자열로 변환시킨뒤 배열로 변환합니다.
// value1을 다시 for문으로 순회해서 value1의 요소를 value2라 하고, value2가 "7"이라면 answer를 증가시킵니다.

function solution(array) {
    var answer = 0;
    for (let value1 of array) {
        value1 = [...("" + value1)];
        for (let value2 of value1) {
            if (value2 === "7") answer++;
        }
    }
    return answer;
}

// 아래 방법으로도 문제를 해결할 수 있습니다.
function solution(array) {
    return array.join("").split("7").length - 1;
}
