function solution(dartResult) {
    var answer = [];
    for (let i = 0; i < dartResult.length; i++) {
        if (isNaN(dartResult[i])) {
            if (dartResult[i] === "#" || dartResult[i] === "*") {
                if (dartResult[i] === "#") {
                    answer[answer.length - 1] = answer[answer.length - 1] * -1;
                } else {
                    if (i === 0) {
                        answer[answer.length - 1] =
                            answer[answer.length - 1] * 2;
                    } else {
                        answer[answer.length - 1] =
                            answer[answer.length - 1] * 2;
                        answer[answer.length - 2] =
                            answer[answer.length - 2] * 2;
                    }
                }
            } else {
                if (dartResult[i] === "S") {
                    continue;
                } else if (dartResult[i] === "D") {
                    if (answer[answer.length - 2] === 10) {
                        answer[answer.length - 2] =
                            answer[answer.length - 2] ** 2;
                    } else {
                        answer[answer.length - 1] =
                            answer[answer.length - 1] ** 2;
                    }
                } else {
                    if (answer[answer.length - 2] === 10) {
                        answer[answer.length - 2] =
                            answer[answer.length - 2] ** 3;
                    } else {
                        answer[answer.length - 1] =
                            answer[answer.length - 1] ** 3;
                    }
                }
            }
        } else {
            if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
                answer.push(Number(dartResult[i] + dartResult[i + 1]));
            } else {
                answer.push(Number(dartResult[i]));
            }
        }
        console.log(answer);
    }
    return answer.reduce((a, c) => a + c);
}
