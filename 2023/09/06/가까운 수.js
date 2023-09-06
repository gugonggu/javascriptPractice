// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 반환하는 문제입니다.
// compare 변수를 점수 배열 내의 숫자의 최댓값인 100으로 두고, array의 길이만금 for 반복문을 돕니다.
// 만약 n - array[i] (가까운 정도)가 compare보다 작으면 compare와 answer륿 바꿔줍니다.
// 만약 n - array[i]가 compare과 같으면 answer을 array[i]과 answer 중에 작은값으로 할당합니다.

function solution(array, n) {
    let answer = 0;
    let compare = 100;
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(n - array[i]) < compare) {
            compare = Math.abs(n - array[i]);
            answer = array[i];
        } else if (Math.abs(n - array[i] === compare)) {
            answer = answer > array[i] ? array[i] : answer;
        }
    }
    return answer;
}
