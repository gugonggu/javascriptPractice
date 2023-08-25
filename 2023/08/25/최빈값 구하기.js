// 정수 배열이 주어질 때, 최빈값을 반환하는 문제였습니다.

// 우선 배열의 길이가 1이면 값이 하나뿐이기 때문에 바로 첫 번째 값을 반환합니다.

// 위 조건을 통과했다면 array 배열 중에 가장 큰 값을 구해서
// 그 값 만큼 숫자와 count가 들어가 있는 객체를 countAry에 넣습니다.

// array.forEach를 통해서 array 배열에 등장한 정수의 횟수를 세주고
// 횟수가 같을 때를 대비해 countAry를 정렬해 줍니다.
// countAry의 가장 마지막 값과 마지막에서 두 번째 값의 count가 같을 경우,
// 등장 횟수가 같은 정수가 있는 것이기 때문에, -1을 반환하고
// 위 조건을 통과했으면 최빈값인 countAry의 가장 마지막 값을 반환합니다.

function solution(array) {
    if (array.length === 1) {
        return array[0];
    }

    const countAry = [];
    for (let i = 0; i <= Math.max(...array); i++) {
        countAry.push({
            num: i,
            count: 0,
        });
    }

    array.forEach((v) => countAry[v].count++);

    countAry.sort((a, b) => a.count - b.count);

    if (
        countAry[countAry.length - 1].count ===
        countAry[countAry.length - 2].count
    ) {
        return -1;
    } else {
        return countAry[countAry.length - 1].num;
    }
}
