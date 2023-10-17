// 숫자 a, b, n이 주어지고
// 문제의 배열은 빈 병 a개를 가져다 주면 콜라 b병을 주는 마트가 있을 때 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다.

// while 문을 사용해 n이 a보다 크거나 같을 때 까지 계속 반복합니다.
// 루프를 돌 때 마다 remain이란 변수를 생성해 n를 a로 나눈 나머지를 저장합니다.
// 그리고 n 값을 변경해 줄건데, n값은 돌려 받는 콜라의 수 = 다음 연산에 사용할 콜라의 수 - 나머지 이므로
// n을 n / a * a로 저장해 줍니다.
// answer에 돌려 받은 개수인 n을 저장하고
// n에 나머지를 더한 다음 루프를 끝냅니다.
// 루프가 종료된 후, answer에 누적된 값을 반환합니다.

function solution(a, b, n) {
    var answer = 0;
    while (n >= a) {
        const remain = n % a;
        n = Math.floor(n / a) * b;
        answer += n;
        n += remain;
    }
    return answer;
}
