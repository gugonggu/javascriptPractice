// 갖고 있는 구슬의 개수 balls와 나누어 줄 구슬의 개수 share이 주어졌을 때
// balls개의 구슬 중 share개의 구슬을 고를 수 있는 모든 경우의 수를 반환하는 문제였습니다.
// 문제들 중에 매우 큰 숫자를 다루는 경우가 있어서 모든 숫자를 BigInt처리해 주었습니다.

function solution(balls, share) {
    let mo = BigInt(1);
    let ja1 = BigInt(1);
    let ja2 = BigInt(1);
    for (let i = balls; i > 0; i--) {
        mo *= BigInt(i);
    }
    for (let i = balls - share; i > 0; i--) {
        ja1 *= BigInt(i);
    }
    for (let i = share; i > 0; i--) {
        ja2 *= BigInt(i);
    }
    const answer = mo / (ja1 * ja2);
    return answer;
}
