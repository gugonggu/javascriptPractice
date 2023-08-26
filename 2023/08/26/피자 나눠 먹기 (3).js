// 피자를 먹는 사람의 수 n과 피자 조각의 수 slice가 주어졌을 때
// 모든 사람이 최소 한 조각 이상 피자를 먹기 위한 피자의 판 수를 반환하는 문제였습니다.

// 로직 자체는 피자 나눠 먹기 (1)과 동일하기 때문에 모든 조각의 수를 주어지는 slice로 변경하여 문제를 해결했습니다.

function solution(slice, n) {
    if (n % slice > 0) {
        return Math.floor(n / slice) + 1;
    } else {
        return Math.floor(n / slice);
    }
}
