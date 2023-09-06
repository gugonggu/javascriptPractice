// 암호화된 문자열 cipher와 code가 주어졌을 때 cipher 중에서 code 배수 번째 글자만 모아 반환하는 문제입니다.
// 문자열을 배열로 변환시킨뒤 map을 사용합니다
// map 순회중에 i + 1을 code로 나누었을 때 나머지가 0이라면 answer에 해당 요소를 추가합니다.

function solution(cipher, code) {
    var answer = "";
    [...cipher].map((v, i) => {
        if ((i + 1) % code === 0) answer += v;
    });
    return answer;
}
