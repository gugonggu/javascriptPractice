// 정수 배열인 num_list가 주어졌을 때 원소 중 짝수와 홀수의 개수를 반환하는 문제였습니다.
// even과 odd를 0으로 초기화하고 for in 문을 사용해서 짝수일 때는 even을 증가시키고 홀수일 때는 odd를 증가시켜 반환했습니다.

function solution(num_list) {
    let even = 0;
    let odd = 0;
    for (let i in num_list) {
        if (num_list[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return [even, odd];
}
