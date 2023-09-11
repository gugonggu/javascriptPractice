// 문자열 my_string이 주어집니다, my_string인 영 대소문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 반환하는 문제입니다.
// 자연수가 연속적으로 있는 경우는 그 수를 붙여서 하나의 수로 취급합니다 (ex. "2", "3" = "23")
// 우선 numbers라는 배열과 temp라는 빈 문자열을 만들었습니다.
// my_string을 배열로 만들고 for 문을 통해 my_string을 순회합니다
// 만약 요소가 숫자라면, temp에 문자열 요소를 더합니다.
// 요소가 숫자가 아닐 때, numbers에 temp를 추가합니다.
// 위 두 조건만 검사하게 되면 가장 마지막 요소가 숫자일 때는 마지막 숫자가 numbers에 추가되지 않기 때문에
// if를 하나 더 추가해서 i가 my_stinrg의 길이 -1이고 요소가 숫자일 때를 검사합니다
// 위 조건을 통과하면 temp에 요소를 더하고 numbers에 temp를 추가하게 될 것입니다.
// 최종 numbers 배열에 추가된 공백("")을 제거해 주기 위해 filter를 사용했고, reduce를 사용해 배열 내부의 모든 숫자값을 더해줬습니다.

function solution(my_string) {
    const numbers = [];
    let temp = "";
    my_string = [...my_string];
    for (let i = 0; i < my_string.length; i++) {
        if (i === my_string.length - 1 && !isNaN(my_string[i])) {
            temp += my_string[i];
            numbers.push(temp);
        } else if (isNaN(my_string[i])) {
            numbers.push(temp);
            temp = "";
        } else {
            temp += my_string[i];
        }
    }
    return numbers.filter((v) => v !== "").reduce((a, c) => a + Number(c), 0);
}
