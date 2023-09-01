// 정수 배열 num_list와 n이 주어졌을 때
// 배열의 요소를 n개수로 묶은 2차원 배열을 반환하는 문제입니다.

// for 반복문을 통해 temp를 생성하고 temp의 길이가 n이면 반환할 답에 추가합니다.

function solution(num_list, n) {
    var answer = [];
    let temp = [];
    for (let i = 0; i < num_list.length; i++) {
        temp.push(num_list[i]);
        if (temp.length === n) {
            answer.push(temp);
            temp = [];
        }
    }
    return answer;
}
