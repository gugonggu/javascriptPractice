// 예산을 나타내는 budget과 부서에서 신청한 금액 배열인 d가 주어질 때
// 예산을 할당받을 수 있는 부서가 가장 많을 때의 부서의 수를 반환하는 문제입니다.
// d를 오름차순으로 정렬하고
// for문을 통해 answer에 d[i]를 계속 더해서 budget을 초과하지 않을 만큼만 반복해서 그 count를 반환합니다.

function solution(d, budget) {
    var answer = 0;
    d = d.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < d.length; i++) {
        if (answer + d[i] > budget) {
            break;
        } else {
            answer += d[i];
            count++;
        }
    }
    return count;
}
