// 문자열 numbers가 주어질 때 문자열에 영어로 적혀있는 숫자를 숫자로 바꿔서 반환하는 문제입니다.
// 먼저 숫자를 나타내는 영단어를 0부터 9까지 순서대로 배열에 저장해 줍니다.
// for 반복문을 0부터 numbers의 길이 - 1만큼 도는데,
// 반복문을 돌 때마다 temp에 글자를 순서대로 하나씩 추가합니다.
// 만약 strNums에 temp가 있으면 answer에 strNums의 temp에 해당하는 인덱스를 문자열로 answer에 추가합니다.
// 숫자가 전부 추가된 문자열을 숫자로 변환해서 반환했습니다.

function solution(numbers) {
    var answer = "";
    const strNums = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let temp = "";
    for (let i = 0; i < numbers.length; i++) {
        temp += numbers[i];
        if (strNums.includes(temp)) {
            answer += strNums.indexOf(temp).toString();
            temp = "";
        }
    }
    return Number(answer);
}
