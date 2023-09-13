// 문자열 A와 B가 주어졌을 때 A 문자열을 밀어서 B로 만들 수 있는 최소 횟수를 반환하는 문제입니다.
// while 문을 통해서 A와 B가 동일하지 않을 때 까지 계속 반복합니다.
// A를 배열로 변환한뒤 unshift와 pop으로 가장 마지막 요소를 앞에 다시 넣고, join으로 다시 문자열로 만들어 줍니다.
// 그리고 횟수를 카운트하는 count를 증가시키고 만약 count가 A의 길이보다 길면 한 바퀴를 다 돌아도 문자를 B로 만들 수 없으니 반복문을 종료시킵니다
// 이제 답을 반환할건데, 위 조건과 같이 count가 A의 길이보다 같다면 -1을, 아니라면 count를 반환합니다.

function solution(A, B) {
    let count = 0;
    while (A !== B) {
        A = [...A];
        A.unshift(A.pop());
        A = A.join("");
        count++;
        if (count > A.length) break;
    }
    return count > A.length ? -1 : count;
}
