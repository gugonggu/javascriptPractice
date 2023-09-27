// * 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직시각형을 출력하는 문제입니다.
// 가로를 count, 세로를 line이라 선언하고
// for문을 line번 도는데 돌 때마다
// 새로운 lineStr을 선언하거
// 2중 for문에서 count번 만큼 lineStr에 *을 추가합니다.
// console.log()로 한 줄을 표현합니다.

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const [count, line] = n;
    for (let i = 0; i < line; i++) {
        let lineStr = "";
        for (let j = 0; j < count; j++) {
            lineStr += "*";
        }
        console.log(lineStr);
    }
});
