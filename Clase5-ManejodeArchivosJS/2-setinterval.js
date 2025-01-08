const intervalTimer = (callback) => {
    console.log("Iniciando el temporizador de intervalos...");
    setInterval(callback, 1000)
}

const question = () => console.log("Estás ahí?")

console.log("Inicio");
intervalTimer(question)
console.log("Fin");