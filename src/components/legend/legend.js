import { d66, d6, d8 } from "../../dices"
import { validRange } from '../../dices/valid-range'

const whenHappened = (d66) => {
  let id

  if (d66 === 11 || d66 === 12) {
    id = "11-12"
  }

  if (d66 >= 13 && d66 <= 26) {
    id = "13-26"
  }

  if (d66 >= 31 && d66 <= 43) {
    id = "31-43"
  }

  if (d66 >= 44 && d66 <= 66) {
    id = "44-66"
  }

  const table = {
    "11-12": {
      when: "Antes da Mudança",
      age: "1.100+",
    },
    "13-26": {
      when: "Antes da Névoa de Sangue",
      age: "300 - 1.100",
    },
    "31-43": {
      when: "Durante as Guerras do Amieiro",
      age: "305 - 360",
    },
    "44-66": {
      when: "Na era da Névoa de Sangue",
      age: "5 - 280",
    },
  }

  return table[id]
}

const getWhat = (number) => {
  const table = {
    1: "unidades de soldados",
    2: "aldeia",
    3: "culto",
    4: "bando de assaltantes",
    5: "cabala",
    6: "monstro",
  }

  return table[number]
}

const getIndex = (value, list) => {
  let result = null
  const vector = Object.keys(list)
  vector.forEach((item, index) => {
    console.log({ value, item, index })
    if (item.includes(value)) {
      result = index
    }
  })

  return vector[result]
}

const thereWasOne = (number) => {
  const table = {
    "11-": {
      someone: "elfo",
      adjective: "sanguinário",
    },
    "12-": {
      someone: "anão",
      adjective: "vingativo",
    },
    "13-": {
      someone: "mascate",
      adjective: "ganancioso",
    },
    "14-": {
      someone: "ferreiro",
      adjective: "infeliz no amor",
    },
    "15-": {
      someone: "fazendeiro",
      adjective: "engenhoso",
    },
    "16-": {
      someone: "aprendiz",
      adjective: "empreendedor",
    },
    "21-": {
      someone: "druida",
      adjective: "gentil",
    },
    "22-": {
      someone: "pastor",
      adjective: "perseverante",
    },
    "23-24": {
      someone: "irmã do corvo",
      adjective: "traiçoeira",
    },
    "25-26": {
      someone: "irmão enferrujado",
      adjective: "moralista",
    },
    "31-32": {
      someone: "ginete",
      adjective: "habilidoso",
    },
    "33-34": {
      someone: "caçador de tesouros",
      adjective: "mesquinho",
    },
    "35-36": {
      someone: "sacerdote",
      adjective: "vaidoso",
    },
    "41-42": {
      someone: "feiticeiro",
      adjective: "sábio",
    },
    "43-44": {
      someone: "chefe bandido",
      adjective: "belo",
    },
    "45-46": {
      someone: "guerreiro",
      adjective: "honrável",
    },
    "51-52": {
      someone: "lorde",
      adjective: "invejoso",
    },
    "53-54": {
      someone: "principe",
      adjective: "cruel",
    },
    "55-56": {
      someone: "princesa",
      adjective: "determinada",
    },
    "61-62": {
      someone: "rainha",
      adjective: "esperta",
    },
    "63-64": {
      someone: "rei",
      adjective: "assustado",
    },
    "65-66": {
      someone: `Não quem, mas o quê! ${getWhat(d6({}))}`,
      adjective: "maligno",
    },
  }

  return table[getIndex(number, table)]
}

const terrainType = (number) => {
  let id = null

  if (validRange(number, 11, 14)) {
    id = "11-14"
  }

  if (validRange(number, 15, 21)) {
    id = "15-21"
  }

  if (validRange(number, 22, 24)) {
    id = "22-24"
  }

  if (validRange(number, 25, 34)) {
    id = "25-34"
  }

  if (validRange(number, 35, 44)) {
    id = "35-44"
  }

  if (validRange(number, 45, 53)) {
    id = "45-53"
  }

  if (validRange(number, 54, 63)) {
    id = "54-63"
  }

  if (validRange(number, 64, 64)) {
    id = "64-"
  }

  if (validRange(number, 65, 66)) {
    id = "65-66"
  }

  const table = {
    "11-14": "Ruína",
    "15-21": "Pântano",
    "22-24": "Charco",
    "25-34": "Planície",
    "35-44": "Floresta",
    "45-53": "Colina",
    "54-63": "Floresta Sombria",
    "64-": "Lago",
    "65-66": "Montanha"
  }

  return table[id]
}

const whatHappened = (number) => {
  let id = null
  if (validRange(number, 11, 14)) {
    id = "11-14"
  }

  if (validRange(number, 15, 22)) {
    id = "15-22"
  }

  if (validRange(number, 23, 26)) {
    id = "23-26"
  }

  if (validRange(number, 31, 33)) {
    id = "31-33"
  }

  if (validRange(number, 34, 36)) {
    id = "34-36"
  }

  if (validRange(number, 41, 44)) {
    id = "41-44"  
  }

  if (validRange(number, 45, 52)) {
    id = "45-52"
  }

  if (validRange(number, 53, 56)) {
    id = "53-56"
  }

  if (validRange(number, 61, 63)) {
    id = "61-63"
  }

  if (validRange(number, 64, 66)) {
    id = "64-66"
  }


  const table = {
    "11-14": "foi traído(a)",
    "15-22": "foi assassinado(a)",
    "23-26": "nunca mais foi visto(a)",
    "31-33": "morreu de fome",
    "34-36": "tirou sua própria vida",
    "41-44": "morreu em batalha",
    "45-52": "foi encantado(a)",
    "53-56": "foi possuído(a)",
    "61-63": "voltou mudado(a)",
    "64-66": "ainda procura"
  }

  return table[id]
}

const thatInPlace = (number) => {
  let id = null
  if (validRange(number, 11, 14)) {
    id = "11-14"
  }

  if (validRange(number, 15, 22)) {
    id = "15-22"
  }

  if (validRange(number, 23, 26)) {
    id = "23-26"
  }

  if (validRange(number, 31, 33)) {
    id = "31-33"
  }

  if (validRange(number, 34, 36)) {
    id = "34-36"
  }

  if (validRange(number, 41, 44)) {
    id = "41-44"  
  }

  if (validRange(number, 45, 52)) {
    id = "45-52"
  }

  if (validRange(number, 53, 56)) {
    id = "53-56"
  }

  if (validRange(number, 61, 63)) {
    id = "61-63"
  }

  if (validRange(number, 64, 66)) {
    id = "64-66"
  }


  const table = {
    "11-14": "ouro, muito ouro",
    "15-22": "um poderoso artefato",
    "23-26": "um conjunto de armadura",
    "31-33": "uma arma",
    "34-36": "um livro valioso",
    "41-44": "um grande tesouro",
    "45-52": "um tesouro de guerra perdido",
    "53-56": "os restos de uma pessoa importante",
    "61-63": "um artefato dos anões",
    "64-66": "um rubi élfico"
  }

  return table[id]
}

const lookingFor = (number) => {
  let id = null
  if (validRange(number, 11, 14)) {
    id = "11-14"
  }

  if (validRange(number, 15, 22)) {
    id = "15-22"
  }

  if (validRange(number, 23, 26)) {
    id = "23-26"
  }

  if (validRange(number, 31, 34)) {
    id = "31-34"
  }

  if (validRange(number, 35, 42)) {
    id = "35-42"
  }

  if (validRange(number, 43, 46)) {
    id = "43-46"  
  }

  if (validRange(number, 51, 54)) {
    id = "51-54"
  }

  if (validRange(number, 55, 62)) {
    id = "55-62"
  }

  if (validRange(number, 63, 66)) {
    id = "63-66"
  }

  const table = {
    "11-14": "uma arma",
    "15-22": "um amor",
    "23-26": "um amigo necessitado",
    "31-34": "um inimigo",
    "35-42": "um tesouro",
    "43-46": "um mapa",
    "51-54": "um membro da familia",
    "55-62": "um artefato",
    "63-66": "um monstro",
  }

  return table[id]
}

const locatedInSomewhere = (number) => {
  const table = {
    1: "aqui",
    2: "próximo",
    3: "um dia de marcha",
    4: "alguns dias de viagem",
    5: "longe",
    6: "do outro lado das terras proibidas"
  }

  return table[parseInt(number)]
}


const direction = (number) => {
  const table = {
    1: "norte",
    2: "nordeste",
    3: "leste",
    4: "sudeste",
    5: "sul",
    6: "sudoeste",
    7: "oeste",
    8: "noroeste"
  }

  return table[parseInt(number)]
}

const becauseSomething = (number) => {
  let id = null

  if (validRange(number, 11, 14)) { id = "11-14" }
  if (validRange(number, 15, 16)) { id = "15-16" }
  if (validRange(number, 21, 24)) { id = "21-24" }
  if (validRange(number, 25, 33)) { id = "25-33" }
  if (validRange(number, 34, 41)) { id = "34-41" }
  if (validRange(number, 42, 45)) { id = "42-45" }
  if (validRange(number, 46, 52)) { id = "46-52" }
  if (validRange(number, 53, 55)) { id = "53-55" }
  if (validRange(number, 56, 61)) { id = "56-61" }
  if (validRange(number, 62, 63)) { id = "62-63" }
  if (validRange(number, 64, 66)) { id = "64-66" }

  const table = {
    "11-14": "amor",
    "15-16": "amizade",
    "21-24": "uma promessa",
    "25-33": "uma profecia",
    "34-41": "uma aposta",
    "42-45": "dever",
    "46-52": "guerra",
    "53-55": "honra",
    "56-61": "insanidade",
    "62-63": "sonhos",
    "64-66": "ganância"
  }

  return table[id]
}

const traveledToSomewhere = (number) => {
  let id = null

  if (validRange(number, 11, 16)) { id = "11-16" }
  if (validRange(number, 21, 22)) { id = "21-22" }
  if (validRange(number, 23, 26)) { id = "23-26" }
  if (validRange(number, 31, 34)) { id = "31-34" }
  if (validRange(number, 35, 36)) { id = "35-36" }
  if (validRange(number, 41, 43)) { id = "41-43" }
  if (validRange(number, 44, 53)) { id = "44-53" }
  if (validRange(number, 54, 56)) { id = "54-56" }
  if (validRange(number, 61, 63)) { id = "61-63" }
  if (validRange(number, 64, 66)) { id = "64-66" }

  const table = {
    "11-16": "uma ruína",
    "21-22": "uma fazenda",
    "23-26": "um túmulo",
    "31-34": "uma torre",
    "35-36": "um castelo",
    "41-43": "uma aldeia",
    "44-53": "uma caverna",
    "54-56": "uma colina",
    "61-63": "uma árvore",
    "64-66": "uma fonte de água"
  }

  return table[id]
}

const monster = (number) => {

  let id = `${number}---`

  if (validRange(number, 11, 12)) { id = "11-12" }
  if (validRange(number, 13, 15)) { id = "13-15" }
  if (validRange(number, 16, 22)) { id = "16-22" }
  if (validRange(number, 23, 24)) { id = "23-24" }
  if (validRange(number, 25, 26)) { id = "25-26" }
  if (validRange(number, 31, 32)) { id = "31-32" }
  if (validRange(number, 33, 34)) { id = "33-34" }
  if (validRange(number, 35, 36)) { id = "35-36" }
  if (validRange(number, 41, 42)) { id = "41-42" }

  const table = {
    "11-12": "Vinha Estranguladora",
    "13-15": "Urso Cinzento",
    "16-22": "Warg da Noite",
    "23-24": "Fantasma",
    "25-26": "Carniçal",
    "31-32": "Esqueleto",
    "33-34": "Morto Inquieto",
    "35-36": "Wyvern",
    "41-42": "Harpias",
    "43---": "Minotauro",
    "44---": "Ent",
    "45---": "Verme do Abismo",
    "46---": "Polvo Gigante",
    "51---": "Serpente Marinha",
    "52---": "Troll",
    "53---": "Cavaleiro da Morte",
    "54---": "Insetoides",
    "55---": "Sangrento",
    "56---": "Mantícora",
    "61---": "Grifo",
    "62---": "Gigante",
    "63---": "Hidra",
    "64---": "Demônio",
    "65---": "Dragonete",
    "66---": "Dragão"
  }

  return table[id]
}

const demons = (number) => {
  let id = `${number}--`

  if (validRange(number, 1, 4)) { id = "1-4" }

  const table = {
    "1-4": "um demônio",
    "5--": "dois demônio",
    "6--": `${d6({})} demônio(s)`
  }

  return `${table[id]}\n\nCrie os demônio usando as tabelas da pág. 79 do Guia da Mestra.`
}

const thatInPlaceTooEnemies = (number) => {
  let id = `${number}---`

  if (validRange(number, 11, 14)) { id = "11-14" }
  if (validRange(number, 15, 22)) { id = "15-22" }
  if (validRange(number, 23, 25)) { id = "23-25" }
  if (validRange(number, 26, 32)) { id = "26-32" }
  if (validRange(number, 33, 34)) { id = "33-34" }
  if (validRange(number, 35, 43)) { id = "35-43" }
  if (validRange(number, 44, 46)) { id = "44-46" }
  if (validRange(number, 51, 54)) { id = "51-54" }
  if (validRange(number, 55, 61)) { id = "55-61" }
  if (validRange(number, 61, 63)) { id = "61-63" }
  if (validRange(number, 64, 65)) { id = "64-65" }

  const table = {
    "11-14": "lupinos agressivos",
    "15-22": "escravagistas sanguinários",
    "23-25": "orcs cruéis",
    "26-32": "fantasmas horrendos",
    "33-34": "sáurios famintos",
    "35-43": "guardas de ferro vigilantes",
    "44-46": "mortos-vivos esfomeados",
    "51-54": "assaltantes gananciosos",
    "55-61": "goblins insanos",
    "61-63": "ogros assassinos",
    "64-65": `${monster(d66({}))} maníacos`,
    "66---": `${demons(d6({}))} caçando`

  }
  return table[id]
}

export const getLegend = () => {
  return {
    whenHappened: whenHappened(d66({})),
    thereWasOne: thereWasOne(d66({})),
    terrainType: terrainType(d66({})),
    direction: direction(d8({})),
    because: {
      something: becauseSomething(d66())
    },
    traveledTo: {
      somewhere: traveledToSomewhere(d66({}))
    },
    locatedIn: {
      somewhere: locatedInSomewhere(d6({}))
    },
    lookingFor: {
      something: lookingFor(d66({}))
    },
    whatHappened: {
      something: whatHappened(d66({}))
    },
    thatInPlace: {
      exist: thatInPlace(d66({}))
    },
    thatInPlaceToo: {
      enemies: thatInPlaceTooEnemies(d66({}))
    }
  }
}
