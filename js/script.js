let color = ["Red", "Yellow", "Blue", "Green"];
let box = document.getElementsByClassName("box");
//De aquí para abajo son pruebas
let nivel = 1;
let flash = 0;
let compA = [];
let userR = [];
let compT = true;
let good = true;

// Aqui inicia el juego

const game = () => {

    if (flash == nivel) {
        clearInterval(interV);
        compT = false;
    }
    if (compT) {
        setTimeout(() => {
            if (compA[flash] == 0) setTimeout(() => {
                document.getElementsByClassName("box")[0].classList.add(`ligth${color[0]}`);
                setTimeout(turnOff, 200, 0);
            }, 300, 0);
            if (compA[flash] == 1) setTimeout(() => {
                document.getElementsByClassName("box")[1].classList.add(`ligth${color[1]}`);
                setTimeout(turnOff, 200, 1)
            }, 300, 1);
            if (compA[flash] == 2) setTimeout(() => {
                document.getElementsByClassName("box")[2].classList.add(`ligth${color[2]}`);
                setTimeout(turnOff, 200, 2)
            }, 300, 2);
            if (compA[flash] == 3) setTimeout(() => {
                document.getElementsByClassName("box")[3].classList.add(`ligth${color[3]}`);
                setTimeout(turnOff, 200, 3)
            }, 300, 3);
            flash++
        }, 200);
    }
}
//Lo de arriba funciona userR queda vacio y se ilumina en secuencia
const check = () => {
    //sigue la secuencia pero al nivel 2 da alert y no verifica
    if (userR[userR.length - 1] !== compA[userR.length - 1]) { good = false };
    console.log(compA);
    console.log(userR);
    console.log(good);
    //revisar lo console creo ahi esta el error.
    if (good == false) {
        setTimeout(() => {
            nivel = 1;
            flash = 0;
            compA = [];
            userR = [];
            good = true;
            compT = true;
            clearInterval(interV);
            document.getElementsByTagName("button")[0].style.display = "inline";
            alert(":v perdiste wey!");
        }, 800);
    }

    if (nivel == userR.length && good) {
        nivel++;
        userR = [];
        good = true;
        compT = true;
        flash = 0;
        play();
    }
}
// Todo esto funciona
// Todo esto lo ingresa el usuario
const play = () => {
    document.getElementsByTagName("button")[0].style.display = "none";
    for (let i = compA.length; i < nivel; i++) {
        compA.push(Math.floor(Math.random() * 4));
    }
    interV = setInterval(game, 800); //este intervalo es de todo el juego hace que prenda
}
const turnOn = (i) => {
    userR.push(i);
    console.log(userR);
    check();
    document.getElementsByClassName("box")[i].classList.add(`ligth${color[i]}`);
    setTimeout(turnOff, 200, i);
}
const turnOff = (i) => {
    document.getElementsByClassName("box")[i].classList.remove(`ligth${color[i]}`);
}

//Todo lo de arriba funciona

