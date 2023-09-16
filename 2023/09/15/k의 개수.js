// 정수 i, j, k가 주어졌을 때 i부터 j까지 k가 등장하는 횟수를 반환하는 문제입니다.
// for문을 통해 i부터 j까지 반복하는데
// num을 배열로 바꾼 것에 k가 있으면 배열을 순회해서 배열의 요소가 k일 때마다 answer을 증가시셔켜서 답을 반환했습니다.

function solution(i, j, k) {
    var answer = 0;
    for (let num = i; num <= j; num++) {
        if ([...num.toString()].includes(k.toString())) {
            [...num.toString()].forEach((v) => {
                if (v === k.toString()) {
                    answer++;
                }
            });
        }
    }
    return answer;
}
