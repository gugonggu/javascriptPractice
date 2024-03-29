// 사냥감의 체력을 나타내는 hp가 주어졌을 때, 최소한의 병력의 수를 구하는 문제입니다.
// 장군개미는 5의 공격력을, 병정개미 3의 공격력, 일개미는 1의 공격력을 갖고 있습니다.
// hp를 5로 나눈값과 hp를 5로 나눈 나머지를 3으로 나눈값과 hp를 5로 나눈 나머지를 3으로 나눈 나머지를 1로 나눈 나머지를 반환합니다.

function solution(hp) {
    return (
        Math.floor(hp / 5) +
        Math.floor((hp % 5) / 3) +
        Math.floor(((hp % 5) % 3) / 1)
    );
}
