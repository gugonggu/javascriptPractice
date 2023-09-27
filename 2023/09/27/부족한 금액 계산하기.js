// 놀이기구 이용 금액 price, 현재 가지고 있는 돈 money, 놀이기구를 탄 횟수 count가 주어지고
// 놀이기구를 n번 탔다면 그때의 놀이기구 이용 금액은 price * n일 때
// 현재 가지고 있는 돈에서 모자란 금액을 반환하고 모자라지 않다면 0을 반환하는 문제입니다.

// 총 가격을 누산할 totalPrice를 선언하고
// for문을 돌려 총 금액에 탈 때 마다의 금액을 누산합니다.
// 반환문에 money - totalPrice가 0이상인가를 판별해
// 이상이면 부족하지 않다는 의미이니 0을,
// 0아래면 부족한 금액을 절댓값으로 반환해주었습니다.

function solution(price, money, count) {
    let totalPrice = 0;
    for (let i = 1; i <= count; i++) {
        totalPrice += price * i;
    }
    return money - totalPrice >= 0 ? 0 : Math.abs(money - totalPrice);
}
