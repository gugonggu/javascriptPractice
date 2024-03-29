// 먹은 양꼬치의 개수 n과 음료수의 개수 k가 주어지고, 양꼬치를 10인분 먹었으면 음료수의 개수를 하나 빼줍니다.
// 위 조건을 모두 계산해서 금액을 반환하는 문제입니다.

function solution(n, k) {
    return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}
