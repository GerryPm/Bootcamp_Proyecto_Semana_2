class Encuestas {
	constructor(preguntas, respuestas, respUser, opciones) {
		this.preguntas = preguntas;
		this.respuestas = respuestas;
		this.respUser = respUser;
		this.opciones = opciones;
	}

	isRespuestas() {
		return this.respUser === this.respuestas;
	}

	getPregunta(index) {
		return this.preguntas[index];
	}

	getOpciones(index) {
		return this.opciones[index];
	}

	votar(indexPregunta, indexRespuesta) {
		if (indexPregunta >= 0 && indexPregunta < this.preguntas.length &&
			indexRespuesta >= 0 && indexRespuesta < this.opciones.length) {
			this.respUser[indexPregunta] = indexRespuesta;
			console.log("¡Tu voto ha sido registrado!");
		} else {
			console.log("Error: Índices de pregunta o respuesta fuera de rango.");
		}
	}

	mostrarResultados() {
		console.log("Resultados de la encuesta:");
		for (let i = 0; i < this.preguntas.length; i++) {
			const pregunta = this.preguntas[i];
			const respuestaSeleccionada = this.opciones[i][this.respUser[i]];
			console.log(pregunta + " - Respuesta seleccionada: " + respuestaSeleccionada);
		}
	}
}

var arrPreg = new Array(7);
var arrResp = new Array(7);

for (let i = 0; i < 7; i++) {
	let pregIn = prompt("Escribe tu Pregunta " + (i + 1) + "\n", "");
	arrPreg[i] = pregIn;
	arrResp[i] = [];

	console.log("Escribe tres opciones de respuesta para la pregunta " + (i + 1) + ":");
	for (let j = 0; j < 3; j++) {
		let respIn = prompt("");
		arrResp[i].push(respIn);
	}
}

console.log("Esta es tu encuesta:\n")
for (let i = 0; i < arrPreg.length; i++) {
	console.log(i + ") " + arrPreg[i]);
}

let respuestasUsuario = new Array(arrPreg.length).fill(-1); // Inicializar con valores no seleccionados

let encuesta = new Encuestas(arrPreg, [1, 2, 0, 1, 2, 0, 1], respuestasUsuario, arrResp);

let seguirVotando = true;

while (seguirVotando) {
	let indexPregunta = parseInt(prompt("Ingresa el número de la pregunta en la que deseas votar (0-" + (arrPreg.length - 1) + "):"));
	let indexRespuesta = parseInt(prompt("Ingresa el número de la respuesta que deseas seleccionar (0-2):"));

	encuesta.votar(indexPregunta, indexRespuesta);

	let continuar = prompt("¿Deseas seguir votando? (Sí/No)").toLowerCase();
	seguirVotando = continuar === "sí" || continuar === "si";
}

encuesta.mostrarResultados();
