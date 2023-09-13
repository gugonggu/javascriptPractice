// 시켜먹은 치킨의 수 chicken이 주어지고, 치킨을 10마리 시켰을 때 서비스로 치킨을 한 마리 받을 수 있고, 서비스로 받은 치킨도 쿠폰이 주어진다고 했을 때
// 서비스로 받을 수 있는 최대 서비스 치킨의 수를 반환하는 문제입니다.
// while문을 통해 순회합니다
// 순회 할 때마다 현재 chicken을 10으로 나눠서 서비스 치킨의 수를 answer에 계속 더하고
// chicken을 10으로 나눈 몫과 나머지를 더한수로 변경합니다.

function solution(chicken) {
    var answer = 0;
    while (chicken >= 10) {
        answer += Math.floor(chicken / 10);
        chicken = (chicken % 10) + Math.floor(chicken / 10);
    }
    return answer;
}
