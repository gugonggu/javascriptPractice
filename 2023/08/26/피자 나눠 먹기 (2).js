// 1부터 100까지의 정수인 사람의 수 n이 주어졌을 때
// 모든 사람이 같은 수의 피자 조각을 먹을 때 그 피자의 판 수를 반환하는 문제였습니다.
// 피자는 6조각으로 잘라지기 때문에 조각 % n이 0이 될 때까지 6씩 계속 더합니다.
// 조각 % 6이 00 된다면 맞아떨지기 때문에 조각을 6으로 나눈 값을 반환합니다.

function solution(n) {
    let pizza = 6;
    while (pizza % n !== 0) {
        pizza += 6;
    }
    return pizza / 6;
}
