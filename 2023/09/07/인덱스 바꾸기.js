// 문자열 my_string과 정수 num1, num2가 주어졌을 때
// 문자열에서 num1과 num2 인덱스에 해당하는 문자를 바꿔서 반환하는 문제입니다,
// 원본을 참고해서 문자를 바꾸기 위해 temp를 my_string을 배열로 바꿔서 저장합니다.
// splice를 이용해 인덱스 값을 넣고, 문자를 넣어서 문자를 교체합니다.
// 변경을 끝낸 배열을 다시 문자열로 바꿔서 반환했습니다.

function solution(my_string, num1, num2) {
    const temp = [...my_string];
    temp.splice(num1, 1, my_string[num2]);
    temp.splice(num2, 1, my_string[num1]);
    return temp.join("");
}
