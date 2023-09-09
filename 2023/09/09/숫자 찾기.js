// 정수 num과 k가 주어질 때
// num에 k가 있으면 k의 인덱스를 반환하고, 없으면 -1을 반환하는 문제입니다.
// 저는 숫자를 문자형으로 변환한 후 배열로 변환해서 includes와 indexOf를 사용하여 문제를 풀었습니다.

function solution(num, k) {
    num = [...num.toString()];
    return num.includes(k.toString()) ? num.indexOf(k.toString()) + 1 : -1;
}

// 아래 방법으로 더 간단하게 풀 수 있습니다.
// 제가 위에서 고민하던 indexOf에 1을 더하면 -1이 반환되지 않고, 0이 반환되어 문제가 해결되지 않았었는데
// 아래처럼 ||을 사용하면 만약 인덱스를 찾을 수 없어서 -1이 반환되어 1을 더해 0이 되면 falsy 값이 나오기 때문에 || 다음에 있는 -1이 반환되어
// 제가 고민하던 문제가 해결됩니다.
// 추가로 ''+을 통해 숫자를 문자열로 바꿀 수 있다는 것을 배웠습니다.

function solution(num, k) {
    return [...("" + num)].indexOf("" + k) + 1 || -1;
}
