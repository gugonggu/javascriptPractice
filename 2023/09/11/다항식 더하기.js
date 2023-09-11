// 1차 다항식 polynomial이 주어졌을 때 동류항끼리 계산한 결과값을 문자열로 반환하는 문제입니다.
// 먼저 답을 계산, 저장하고 출력하기 위해 answerObj라는 객체를 만들어서, 1차 항에 대한 숫자와 상수항에 대한 숫자를 정의했습니다.
// 다항식을 공백을 기분으로 나눈 배열을 for문을 통해 순회합니다
// 문제에서 연산자는 무조건 +이니, 계산해야할 숫자가 있는 짝수번째 인덱스만 골라 작업을 하기 위해 if를 통해 짝수를 판별합니다
// if로 걸러지면, polynomial[i]는 무조건 계산을 해야할 숫자가 들어있는 요소입니다.
// 요소를 배열로 변환시킨 뒤 x가 들어있는지 없는지를 판별해서 1차항과 상수항을 골라냅니다
// 1차항이라면 x를 제외한 숫자들을 numPart에 문자열 +를 사용해 배열로 분해되었던 숫자들을 합칩니다
// 숫자가 모두 합쳐졌다면 answerObj에 계산을 해줄건데, 1x는 1을 생략해서 x로 그냥 표현하기 때문에 1x은 numPart의 길이가 0입니다
// 따라서 numPart의 길이가 0인지를 판별해 그냥 1을 더하거나 numPart를 숫자로 변환해 더합니다.
// polynomial의 요소에 x가 없으면 상수항이니, 그냥 요소를 숫자로 변환시켜 더합니다.
// 이제 답을 반환해야 하는데, 1차항과 상수항 둘 다 0이라면 그냥 0을 반환하고
// 1차항이 0이라면 상수항을 반환했으며
// 상수항이 0이고, x앞의 수가 1이면 그냥 x를 반환하고 아니라면 숫자를 붙여서 반환합니다
// 마지막으로 두 수 모두 값이 저장되어있으면 x앞의 숫자가 1인지 아닌지를 판별한 뒤 nx + 상수항을 반환했습니다.

function solution(polynomial) {
    var answerObj = {
        x: 0,
        num: 0,
    };
    polynomial = polynomial.split(" ");

    for (let i = 0; i < polynomial.length; i++) {
        if (i % 2 === 0) {
            const value = polynomial[i].split("");
            if (value.includes("x")) {
                let numPart = "";
                for (let j = 0; j < value.length - 1; j++) {
                    numPart += value[j];
                }
                if (numPart.length === 0) {
                    answerObj.x += 1;
                } else {
                    answerObj.x += Number(numPart);
                }
            } else {
                answerObj.num += Number(polynomial[i]);
            }
        }
    }
    if (answerObj.x === 0 && answerObj.num === 0) {
        return 0;
    } else if (answerObj.x === 0) {
        return `${answerObj.num}`;
    } else if (answerObj.num === 0) {
        return answerObj.x === 1 ? `x` : `${answerObj.x}x`;
    } else {
        return answerObj.x === 1
            ? `x + ${answerObj.num}`
            : `${answerObj.x}x + ${answerObj.num}`;
    }
}
