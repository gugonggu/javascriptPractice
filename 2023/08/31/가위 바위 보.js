// 가위 바우 보를 내는 순서대로 나타내는 문자열 rsp가 주어지고
// 가위가 2, 바위가 0, 보가 5일 떄
// 승리하는 경우를 순서대로 나타내는 문자열을 반환하는 문제입니다.
// 문자열을 배열로 만든 뒤, map을 사용해 요소마다 삼항연산자를 사용해서 이기는 경우의 수를 answer에 담아 반환했습니다.

function solution(rsp) {
    var answer = "";
    [...rsp].map((v) =>
        v === "2"
            ? (answer += "0")
            : v === "0"
            ? (answer += "5")
            : (answer += "2")
    );
    return answer;
}
