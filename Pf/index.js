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
		this.preguntas.forEach((pregunta, index) => {
			const respuestaSeleccionada = this.opciones[index][this.respUser[index]];
			console.log(pregunta + " - Respuesta seleccionada: " + respuestaSeleccionada);
		});
	}
}

const arrPreg = Array.from({length: 7}, (_, i) => {
	let pregIn = prompt(`Escribe tu Pregunta ${i + 1}`);
	let arrResp = Array.from({length: 3}, () => prompt(""));
	return [pregIn, arrResp];
});

console.log("Esta es tu encuesta:\n")
arrPreg.forEach((pregunta, index) => {
	console.log(index + ") " + pregunta[0]);
});

let respuestasUsuario = new Array(arrPreg.length).fill(-1); // Inicializar con valores no seleccionados

let encuesta = new Encuestas(
	arrPreg.map(pregunta => pregunta[0]),
	[1, 2, 0, 1, 2, 0, 1],
	respuestasUsuario,
	arrPreg.map(pregunta => pregunta[1])
);

let seguirVotando = true;

while (seguirVotando) {
	let indexPregunta = parseInt(prompt(`Ingresa el número de la pregunta en la que deseas votar (0-${arrPreg.length - 1}):`));
	let indexRespuesta = parseInt(prompt("Ingresa el número de la respuesta que deseas seleccionar (0-2):"));

	encuesta.votar(indexPregunta, indexRespuesta);

	let continuar = prompt("¿Deseas seguir votando? (Sí/No)").toLowerCase();
	seguirVotando = continuar === "sí" || continuar === "si";
}

encuesta.mostrarResultados();
