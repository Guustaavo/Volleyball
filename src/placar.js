import leia from 'readline-sync';

var sets = 1;
var setsTime1 = 0;
var setsTime2 = 0;

var pontosTime1 = 0;
var pontosTime2 = 0;

var gameOver = false;

function contador() {

    while (gameOver === false) {
        console.clear();
        console.log("  Sets Time 1: " + setsTime1 + "\n    X" + "\n  Sets Time 2: " + setsTime2);
        console.log("\n  Pontos Time 1: " + pontosTime1 + "\n    X" + "\n  Pontos Time 2: " + pontosTime2);

        var ponto = leia.keyInSelect(["Time 1", "Time 2"], "Selecione o time que marcou:")
        if (ponto === 0) {
            pontosTime1++;
            if (pontosTime1 >= 25 && (pontosTime1 - pontosTime2) >= 2) {
                sets++;
                setsTime1++;
                pontosTime1 = 0;
                pontosTime2 = 0;
            }
        } else if (ponto === 1) {
            pontosTime2++;
            if (pontosTime2 >= 25 && (pontosTime2 - pontosTime1) >= 2) {
                sets++;
                setsTime2++;
                pontosTime2 = 0;
                pontosTime1 = 0;
            }
        }
        if (setsTime1 >= 3 || setsTime2 >= 3) {
            gameOver = true;
        }
    }

    console.clear();
    console.log("===============================");
    console.log("       FIM DA PARTIDA!         ");
    console.log("===============================");
    console.log("Placar Final: Time 1 [ " + setsTime1 + " ] X [ " + setsTime2 + " ] Time 2");
    console.log("Sets jogados: " + sets);
}

contador();