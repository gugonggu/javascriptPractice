// 정수 배열 numbers와 정수 k가 주어질 때, k번째로 공을 던지는 사람의 번호를 반환하는 문제입니다.
// 공은 1번부터 던지며, 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.

// for 반복문을 통해 cur을 2만큼 증가시키고 cur이 numbers의 길이를 넘어섰을 때는 if 문을 통해 0이나 1로 바꿔줍니다.

function solution(numbers, k) {
    let cur = 0;
    for (let i = 0; i < k - 1; i++) {
        cur += 2;
        if (cur === numbers.length) {
            cur = 0;
        } else if (cur === numbers.length + 1) {
            cur = 1;
        }
    }
    return numbers[cur];
}
