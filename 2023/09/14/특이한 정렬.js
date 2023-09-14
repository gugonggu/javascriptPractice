// 정수 배열 numlist와 정수 n이 주어질 때 배열을 n에 가까운 순서로 정렬하는데, n과의 거리가 같다면 더 큰 수를 앞에 오도록 배치한 배열을 반환하는 문제입니다.
// 우선 numlist를 순회해서 요소에 n을 뺀, 거리를 tempAry에 넣습니다.
// tempAry를 절댓값을 기준으로 오름차순으로 정렬하고
// tempAry를 forEach로 순회합니다.
// 만약 tempAry에 요소 * - 값이 존재하고 0이 아니라면
// temp에 요소 + n을 넣습니다.
// temp의 길이가 2가 되면 덜댓값 중복 요소를 모두 temp에 넣은 것이니, temp를 내림차순으로 정렬하고 답에 push합니다.
// 또 거리가 중복되는 요소가 없다면 그냥 답에 요소 + n을 push합니다.

function solution(numlist, n) {
    var answer = [];
    const tempAry = [];
    numlist.forEach((v) => {
        tempAry.push(v - n);
    });
    tempAry.sort((a, b) => Math.abs(a) - Math.abs(b));
    let temp = [];
    tempAry.forEach((v) => {
        if (tempAry.includes(-v) && v !== 0) {
            temp.push(v + n);
            if (temp.length === 2) {
                temp.sort((a, b) => b - a);
                answer.push(...temp);
                temp = [];
            }
        } else {
            answer.push(v + n);
        }
    });
    return answer;
}

// 아래 방법으로 풀면 더 쉽게 풀 수 있습니다.
// 설명 = js의 sort함수를 보면 음수를 반환하면 a가 먼저, 양수면 b가 순서가 먼저 되도록 짜여져 있고, b랑 a의 거리가 같은 상황 즉 Math.abs(a - n) - Math.abs(b - n)이게 0이 되는 상황이 되면 ||연산자 뒤가 실행되면서 같은 거리일 경우 큰 수를 먼저 나오도록 하는거죠.
function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
