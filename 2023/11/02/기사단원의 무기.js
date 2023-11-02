// 기사들이 무기점에서 무기를 구매하려는데, 기사마다 부여된 변호의 약수의 개수에 맞는 공격력의 무기를 구매하려 합니다.
// 그런데 공격력이 협약보다 크면, 정해진 공격력에 맞는 무기를 구매해야합니다.
// 기사들에게 할당된 숫자 number, 공격력 제한 limit, 정해진 공격력 power가 주어질 때
// 모든 기사들이 구매할 무기들의 공격력의 합을 반환하는 문제입니다.

// 외부 for문을 통해 1부터 number까지 모든 기사들을 순회합니다.
// 기사들을 순회할 때마다 내부 for문을 통해 약수의 개수를 검사하는데,
// 약수는 대칭성이 있어서 i의 제곱근까지만 검사해도 개수를 알 수 있습니다.
// for문을 돌며 i를 j로 나눈 값이 j와 같다면 1을, 아니라면 2을 추가하며 약수의 개수를 검사합니다.
// 약수의 개수가 limit보다 크다면 power을 더해주고, 아니라면 약수의 개수를 더합니다.
// 모든 약수의 개수를 더한 값을 반환해주었습니다.

function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        let tmp = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (i / j === j) {
                    tmp++;
                } else {
                    tmp += 2;
                }
            }
        }
        answer += tmp > limit ? power : tmp;
    }
    return answer;
}
