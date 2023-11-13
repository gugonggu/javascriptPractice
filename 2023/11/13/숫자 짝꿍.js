// 두 정수 X와 Y가 주어질 때
// X와 Y에서 공통으로 나타나는 정수들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 한다.
// 기본적으로 짝꿍을 문자열로 만들어 반환하는 문제이지만, 짝꿍이 존재하지 않으면 '-1'을, 0으로만 이루어져 있다면 '0'을 반환하는 문제이다.

// 첫 풀이를 저장하지 않고 초기화 시켜서 코드상으로 남아있지는 않지만,
// 첫 코드에서 정답은 잘 출력되었지만 정수의 자릿수가 최대 3백만까지 커질 수 있음에 따라 시간 초과 오류가 발생했다.
// 따라서 이전 풀이에서 사용했던 indexOf, splice와 같은 배열을 순회해야 하는 메서드 사용을 줄여 실행 시간을 단축시켰다.
// 해당 메서드를 사용하지 않아 풀이 방법도 살짝 바뀌었는데, 그 방법은 아래와 같다.

// 먼저 X와 Y를배열로 만들고, 그 정보를 담기 위해 xObj와 yObj를 선언했다.
// 두 번의 for문으로 X, Y의 정보를 객체에 저장하고
// 답을 만들기 위한 ansObj를 선언하여
// xObj와 yObj 중에 key 값이 중복된다면 두 value중 작은 값을 저장해 주었다. (중복 개수)
// 또 반환할 답 생성을 위해 ansObj를 순회하여 key값을 value번 answer에 더해주었다.
// 예외 처리로 answer의 길이가 없다면 중복되는 숫자가 없다는 의미이니, '-1'을 반환해 주었고,
// answer에 '0'이 아닌 값을 걸러낸 뒤 그 길이가 0이라면 0으로만 이루어져 있다는 얘기이니 '0'을 반환해주었다.
// 마지막으로 answer을 내림차순으로 정렬한 뒤 join을 통해 문자열을 생성하여 반환해 주었다.

function solution(X, Y) {
    var answer = "";
    X = X.split("");
    const xObj = {};
    Y = Y.split("");
    const yObj = {};
    for (let i = 0; i < X.length; i++) {
        if (xObj[X[i]] === undefined) {
            xObj[X[i]] = 1;
        } else {
            xObj[X[i]]++;
        }
    }
    for (let i = 0; i < Y.length; i++) {
        if (yObj[Y[i]] === undefined) {
            yObj[Y[i]] = 1;
        } else {
            yObj[Y[i]]++;
        }
    }
    const ansObj = {};
    Object.entries(xObj).forEach(([key, value]) => {
        if (yObj[key] !== undefined) {
            ansObj[key] = Math.min(value, yObj[key]);
        }
    });
    Object.entries(ansObj).forEach(([key, value]) => {
        answer += key.repeat(value);
    });
    if (answer.length === 0) return "-1";
    answer = [...answer];
    if (answer.filter((v) => v !== "0").length === 0) return "0";
    return answer.sort((a, b) => b - a).join("");
}
