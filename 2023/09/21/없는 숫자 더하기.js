// 0부터 9까지의 숫자들 중 일부가 들어있는 배열 numbers가 주어질 때
// 포함하고 있지 않은 숫자들의 합을 반환하는 문제입니다.
// 비교할 대상이 되는 배열 numAry를 선언하고
// 해당 배열을 filter해서 numbers중에 없는 숫자만 남기고, reduce를 이용해 합을 구해줬습니다.

function solution(numbers) {
    let numAry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numAry.filter((v) => !numbers.includes(v)).reduce((a, c) => a + c);
}
