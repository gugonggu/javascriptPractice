// 총 가격인 price가 주어졌을 때 금액에 따라 할인율을 다르게 해서
// 구매 금액을 반환하는 문제였습니다.
// 가격에 따라 할인율을 다르게 적용해서 총 가격 * 할인율을 반환합니다.

function solution(price) {
    let saleRate = 1;
    if (price >= 500000) {
        saleRate = 0.8;
    } else if (price >= 300000) {
        saleRate = 0.9;
    } else if (price >= 100000) {
        saleRate = 0.95;
    }
    return Math.floor(price * saleRate);
}
