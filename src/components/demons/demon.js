import { d66, d6, d8, d3 } from '../../dices'
import { validRange } from '../../dices/valid-range'

const getDemonForm = (number) => {
  let id = `${number}---`
  if (validRange(number, 11, 24)) { id = "11-24" }
  if (validRange(number, 25, 26)) { id = "25-26" }
  if (validRange(number, 31, 32)) { id = "31-32" }
  if (validRange(number, 33, 34)) { id = "33-34" }
  if (validRange(number, 35, 36)) { id = "35-36" }
  if (validRange(number, 41, 42)) { id = "41-42" }
  if (validRange(number, 43, 44)) { id = "43-44" }
  if (validRange(number, 45, 46)) { id = "45-46" }
  if (validRange(number, 51, 52)) { id = "51-52" }
  if (validRange(number, 53, 54)) { id = "53-54" }
  if (validRange(number, 55, 56)) { id = "55-56" }
  if (validRange(number, 61, 62)) { id = "61-62" }

  const table = {
    "11-24": {
      name: "Humanoide",
      strength: d6({}) + 3,
      agility: 3,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "25-26": {
      name: "Minotauro",
      strength: d6({}) + 5,
      agility: 3,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "31-32": {
      name: "Bode",
      strength: d6({}) + 3,
      agility: 4,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "33-34": {
      name: "Urso",
      strength: d6({}) + 6,
      agility: 3,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "35-36": {
      name: "Cobra",
      strength: d6({}) + 4,
      agility: 4,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "41-42": {
      name: "Morto-vivo",
      strength: d6({}) + 3,
      agility: 3,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "43-44": {
      name: "Aranha",
      strength: d6({}) + 5,
      agility: 4,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "45-46": {
      name: "Serpente",
      strength: d6({}) + 3,
      agility: 4,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "51-52": {
      name: "Lobo",
      strength: d6({}) + 4,
      agility: 4,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "53-54": {
      name: "Inseto",
      strength: d6({}) + 2,
      agility: 3,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "55-56": {
      name: "Lupino",
      strength: d6({}) + 4,
      agility: 3,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "61-62": {
      name: "Caranguejo Gigante",
      strength: d6({}) + 5,
      agility: 2,
      wits: 3,
      emphaty: 3,
      armor: d6({}) + 3,
      effect: "-",
    },
    "63---": {
      name: "Sapo Gigante",
      strength: d6({}) + 5,
      agility: 2,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "-",
    },
    "64---": {
      name: "Polvo",
      strength: d6({}) + 4,
      agility: 2,
      wits: 3,
      emphaty: 3,
      armor: d6({}),
      effect: "Correr é uma ação lenta",
    },
    "65---": {
      name: "Névoa",
      strength: d6({}) + 3,
      agility: 3,
      wits: 3,
      emphaty: 3,
      armor: "-",
      effect: "Não pode ser ferido por armas físicas",
    },
    "66---": {
      name: "Sombra",
      strength: d6({}) + 3,
      agility: 3,
      wits: 3,
      emphaty: 3,
      armor: "-",
      effect: "Não pode ser ferido por armas físicas",
    },
  }

  return table[id]
}

let skills = []
let attacks = []

const validSkill = (skill) => {
  return skill.filter(i => skills.map(x => x.name).includes(i.name))
}

const getDemonSkill = (number) => {
  let id = `${number}---`
  const table = {
    "11-12": {
      name: "Pele de Pedra",
      effect: "Valor de Armadura +6",
    },
    "13-14": {
      name: "Gigante",
      effect: "Força +2D6",
    },
    "15-16": {
      name: "Corpo em Chamas",
      effect: "Imune a fogo",
    },
    "21-22": {
      name: "Feito de Gelo",
      effect: "Valor de armadura +2",
    },
    "23-24": {
      name: "Mumificado",
      effect: "Ataque de medo D6+5",
    },
    "25-26": {
      name: "Gosmento",
      effect: "Pode se mover por aberturas minúsculas.",
    },
    "31-32": {
      name: "Beleza Sobrenatural",
      effect: "+2 Manipulação",
    },
    "33-34": {
      name: "Coberto de Feridas",
      effect: "Toque infeccioso, Virulência D6+5",
    },
    "35-36": {
      name: "Penas",
      effect: "Valor de armadura +2",
    },
    "41-43": {
      name: "Asas",
      effect: "Pode voar, Valor de movimento 3",
    },
    "44-45": {
      name: "Cheio de Luz",
      effect: "Ataque de medo D6+5",
    },
    "46---": {
      name: "Coberto de Vinhas",
      effect: "Valor de armadura +3",
    },
    "51-53": {
      name: "Transparente",
      effect: "Todos os ataques contra o demônio recebem -3 de penalidade",
    },
    "54---": {
      name: "Coberto de Olhos",
      effect: "Compre uma carta de iniciativa extra, descarte a pior",
    },
    "55---": {
      name: "Sem Olhos",
      effect: "Compre uma carta de iniciativa extra, descarte a melhor",
    },
    "56-66": {
      name: "Role duas vezes",
      effect: "-",
    },
  }

  if (validRange(number, 11, 12)) { id = "11-12" }
  if (validRange(number, 13, 14)) { id = "13-14" }
  if (validRange(number, 15, 16)) { id = "15-16" }
  if (validRange(number, 21, 22)) { id = "21-22" }
  if (validRange(number, 23, 24)) { id = "23-24" }
  if (validRange(number, 25, 26)) { id = "25-26" }
  if (validRange(number, 31, 32)) { id = "31-32" }
  if (validRange(number, 33, 34)) { id = "33-34" }
  if (validRange(number, 35, 36)) { id = "35-36" }
  if (validRange(number, 41, 43)) { id = "41-43" }
  if (validRange(number, 44, 45)) { id = "44-45" }
  if (validRange(number, 51, 53)) { id = "51-53" }
  
  if (validRange(number, 56, 66)) {
    let i = 0, skill = {}
    while (i < 1) {
      do {
        skill = getDemonSkill(d66({}))
      } while (validSkill(skill).length > 0)
      skills = [...skill, ...skills ]
      i = i + 1
    }
    return skills
  }
  return [table[id]]
}

export const getDemonAttack = (number) => {
  let id = number
  const table = {
    '11-15': {
      value: 'Garras',
      dices: d6({}) + 4,
      damage: ((number) => {
        let id = `${number}--`
        const table = {
          '1-2': "Dano 1",
          '3-5': "Dano 2",
          '6--': "Dano 3",
        }
        if (validRange(number, 1, 2)) { id = '1-2' }
        if (validRange(number, 3, 5)) { id = '3-5' }
        if (number === 6) { id = '6--' }

        return table[id]
      })(d6({})),
      range: "Ao Alcance das Mãos"
    },
    '16-22': {
      value: 'Presas',
      dices: d6({}) + 5,
      damage: ((number) => {
        let id = `${number}--`
        const table = {
          '1-2': "Dano 1",
          '3-5': "Dano 2",
          '6--': "Dano 3",
        }
        if (validRange(number, 1, 2)) { id = '1-2' }
        if (validRange(number, 3, 5)) { id = '3-5' }
        if (number === 6) { id = '6--' }

        return table[id]
      })(d6({})),
      range: "Ao Alcance das Mãos"
    },
    '23-25': {
      value: 'Chifres',
      dices: d6({}) + 6,
      damage: ((number) => {
        let id = number
        const table = {
          '1-4': "Dano 2",
          '5-6': "Dano 3",
        }
        if (validRange(number, 1, 4)) { id = '1-4' }
        if (validRange(number, 5, 6)) { id = '5-6' }

        return table[id]
      })(d6({})),
      range: "Ao Alcance das Mãos"
    },
    '26-32': {
      value: 'Tentáculos',
      dices: d6({}) + 4,
      damage: ((number) => {
        let id = number
        const table = {
          '1-2': "Dano 1",
          '3-6': "Dano 2",
        }
        if (validRange(number, 1, 2)) { id = '1-2' }
        if (validRange(number, 3, 6)) { id = '3-6' }

        return `${table[id]}. Então AGARRADO.`
      })(d6({})),
      range: "Perto"
    },
    '33-35': {
      value: 'Fogo',
      dices: d6({}) + 6,
      damage: "A vítima continua a receber 1 ponto de dano em toda rodada até que o fogo seja apagado com uma rolagem de MOVIMENTAÇÃO",
      range: "Perto"
    },
    '36-41': {
      value: 'Frio',
      dices: d6({}) + 5,
      damage: "A vítima também fica hipotérmica instantaneamente.",
      range: "Perto"
    },
    '42-45': {
      value: 'Rugido',
      dices: "-",
      damage: `Ataque de medo: ${d3({}) + 6}`,
      range: "Perto"
    },
    '46-51': {
      value: 'Olhar mortal',
      dices: "-",
      damage: `Ataque de medo: ${d6({}) + 5}`,
      range: "Perto"
    },
    '52-56': {
      value: 'Arma Pesada',
      dices: d6({}) + 5,
      damage: ((number) => {
        const table = {
          1: "Espada longa",
          2: "Montante",
          3: "Malho",
          4: "Maça estrela",
          5: "Machado de duas mãos",
          6: "Tridente" 
        }
        return table[number]
      })(d6({})),
      range: "Ao Alcance das Mãos"
    },
    "61-66": {
      value: "Role 3 vezes",
      dices: "-",
      damage: "-",
      range: "-"
    },
    "66---": {
      value: "Role 4 vezes",
      dices: "-",
      damage: "-",
      range: "-"
    }
  }

  if (validRange(number, 11, 15)) { id = "11-15" }
  if (validRange(number, 16, 22)) { id = "16-22" }
  if (validRange(number, 23, 25)) { id = "23-25" }
  if (validRange(number, 26, 32)) { id = "26-32" }
  if (validRange(number, 33, 35)) { id = "33-35" }
  if (validRange(number, 36, 41)) { id = "36-41" }
  if (validRange(number, 42, 45)) { id = "42-45" }
  if (validRange(number, 46, 51)) { id = "46-51" }
  if (validRange(number, 52, 56)) { id = "52-56" }
  
  if (validRange(number, 61, 66)) {
    let hasAttackInList = false, attack = {}, i = 0
    while (i <= 2) {
      do {
        attack = getDemonAttack(d66({})).pop()
        hasAttackInList = attacks.length > 0 ? attacks.find(x => x.value === attack.value) : false
      } while (hasAttackInList)
      attacks = [ ...[attack], ...attacks]
      i = i + 1
    }
    return attacks
  }

  return [table[id]]
}

const getAttack = (number) => {
  console.log(number)
  if (number === 6) {
    let i = 0, n;
    while (i < 2) {
      n = getAttack(d6({}))
      if (n > 6) {
        attacks = [ ...n, ...attacks]
        i = i + 1
      }
    }
    return [number + 1]
  }

  return [number + 1]
}

export const getDemon = () => {
  console.log("aqui")
  return {
    form: {}, //getDemonForm(d66({})),
    skills: [], // getDemonSkill(d66({})),
    attacks: getAttack(d6({})), //JSON.parse(localStorage.getItem("attacks")),
    specialSkill: {
      name: "nenhuma",
      effect: "nenhum",
    },
    weekness: {
      name: "nenhum",
      effect: "nenhum"
    }
  }
}

export const demon = getDemon()
