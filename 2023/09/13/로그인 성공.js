// 사용자가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때
// 아이디와 비밀번호가 모두 일치한다면 login을, 비밀번호가 일치하지 않다면 wrong pw를, 아이디, 비밀번호 모두 없다면 fail을 반환하는 문제입니다.
// for문을 사용해 db를 순회합니다.
// 첫 번째 if문에서 입력받은 id와 db의 id를 대조합니다.
// 만약 일치하는 id가 있으면 추가로 비밀번호를 확인해서 login을 answer에 저장하거나 wrong pw를 answer에 저장하고
// 일치하는 id가 없으면 fail을 answer에 저장합니다.
// for문 마지막에 if 문을 추가해서 answer이 login이나 wrong pw일 때 for문을 종료해서 현재 answer에 저장되어있는 값을 반환했습니다.

function solution(id_pw, db) {
    var answer = "";
    for (let i = 0; i < db.length; i++) {
        if (id_pw[0] === db[i][0]) {
            if (id_pw[1] === db[i][1]) {
                answer = "login";
            } else {
                answer = "wrong pw";
            }
        } else {
            answer = "fail";
        }
        if (answer === "login" || answer === "wrong pw") {
            break;
        }
    }
    return answer;
}
