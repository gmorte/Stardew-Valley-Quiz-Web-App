export const data = [
  {
    question: "¿Cuantos niveles tienen las minas?",
    choices: ["80", "120", "100"],
    answer: "120",
  },

  {
    question: "¿En que estación se celebra el festival del Luau?",
    choices: ["Verano", "Otoño", "Primavera"],
    answer: "haskell",
  },

  {
    question: "¿Con cual de estos personajes te puedes casar?",
    choices: ["Sandy", "Penny", "Linus"],
    answer: "Verano",
  },

  {
    question: "¿Como se llama el alcalde del valle?",
    choices: ["Sam", "Lewis", "Demetrius"],
    answer: "Lewis",
  },

  {
    question:
      "¿Por que decide tu personaje irse a vivir a la granja de su abuelo?",
    choices: [
      "Todas son correctas",
      "Lo hechan del trabajo",
      "Quiere una vida más tranquila",
    ],
    answer: "Todas son correctas",
  },

  {
    question: "¿Cuantos niveles tiene la caverna calavera?",
    choices: ["150", "120", "Infinitos"],
    answer: "Infinitos",
  },

  {
    question: "¿Cuanto tarda la semilla rara en crecer?",
    choices: ["20 dias", "Una estación", "25 días"],
    answer: "Una estación",
  },

  {
    question: "¿Cual de estas cosas NO podemos hacer en el juego?",
    choices: ["Bañarse en un spa", "Montar a caballo", "Viajar en tren"],
    answer: "Viajar en tren",
  },

  {
    question: "¿Donde podemos visitar a Krobus?",
    choices: ["En el desierto", "En las minas", "En las alcantarillas"],
    answer: "En las alcantarillas",
  },

  {
    question: "¿Quien de ellas quiere ser una artista?",
    choices: ["Abigail", "Haley", "Leah"],
    answer: "Leah",
  },

  {
    question: "¿De quien esta enamorado Clint?",
    choices: ["Caroline", "Marnie", "Emily"],
    answer: "Emily",
  },

  {
    question: "¿Quien es el abuelo de Alex?",
    choices: ["Willy", "Lewis", "George"],
    answer: "George",
  },

  {
    question: "¿Cuantos minerales necesitas para fabricar un lingote?",
    choices: ["15", "5", "25"],
    answer: "25",
  },

  {
    question: "¿Con quien vive Jas?",
    choices: [
      "Su tía", "Su madre", "Su abuela"],
    answer:
      "Su abuela",
  },

  {
    question: "¿Cuantos corazones de amistad tienes para tu esposo/a?",
    choices: ["14", "10", "20"],
    answer: "25",
  },

  {
    question: "¿Cual es el maximo numero de corazones de una amistad?",
    choices: ["12", "10", "5"],
    answer: "10",
  },

  {
    question: "¿Cual es el oficio de Robin?",
    choices: ["Carpintera", "Enfermera", "Minera"],
    answer: "Carpintera",
  },

  {
    question: "¿Cuando es la primera evaluación del abuelo?",
    choices: [
      "Al comienzo del tercer año",
      "Al comienzo del segundo año",
      "Al comienzo del quinto año",
    ],
    answer: "Al comienzo del tercer año",
  },

  {
    question:
      "¿Cual es el máximo de puntos obteninles en la evaluación del abuelo?",
    choices: ["100", "15", "21"],
    answer: "21",
  },

  {
    question:
      "¿Cual es el oficio de Gus?",
    choices: ["Pescador", "Camarero", "Herrero"],
    answer: "21",
  },

  {
    question:
      "¿Cual es el oficio de Sebastian?",
    choices: ["Programador informatico", "Mecanico", "Electricista"],
    answer: "Programador informatico",
  },

  {
    question:
      "¿Como se llama el mago?",
    choices: ["Demetrius", "Rasmodius", "Moebius"],
    answer: "Rasmodius",
  },

  {
    question:
      "¿Cual es la mejor arma del juego?",
    choices: ["Espada galaxia", "Espada infinita", "Katana de lava"],
    answer: "Espada infinita",
  },
  
];

export function fisherYatesShuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

fisherYatesShuffle(data);
