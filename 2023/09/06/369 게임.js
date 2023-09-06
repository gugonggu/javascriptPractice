// 369 게임을 하고있습니다 주인공이 말해야하는 숫자 order가 주어질 때 쳐야할 박수 횟수를 반환하는 문제입니다.
// 스프레드 문법을 사용하기위해 숫자 타입인 order를 문자열로 변환시켜 배열로 변환시켰고
// filter를 사용해 3, 6, 9만 남기고 다른 숫자는 모두 버립니다.
// 그 후 남아있는 배열의 요소 개수인 length를 반환해줬습니다.

function solution(order) {
    return [...order.toString()].filter(
        (v) => v === "3" || v === "6" || v === "9"
    ).length;
}
