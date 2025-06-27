import { PenseeData } from "../../Domaine/Classes/PenseeData";

export const pensée_datas : PenseeData[] = [
  {
    element_declencheur: "La sécurité m'a dit de venir",
    date: new Date("2025-06-12T05:11:37.962Z"),
    interpretation: "J'ai peur qu'il me fait du mal",
    emotions_avant: [
      "Peur"
    ],
    contre_pensee_negative: "Sois bien avec toi-même. Prends ton temps",
    emotions_apres: [
      "Joie"
    ],
    id: 1
  },
  {
    element_declencheur: "Ma tante m'a dit si la chemise me va bien",
    date: new Date("2025-06-13T10:12:54.992Z"),
    interpretation: "OOOOOOOHHHHH ! Elle est meilleur que moi",
    emotions_avant: [
      "Peur",
      "Colère"
    ],
    contre_pensee_negative: "Personne n'est meilleur que l'autre que par la piété",
    emotions_apres: [
      "Colère"
    ],
    id: 2
  },
  {
    element_declencheur: "Une femme me mendiait",
    date: new Date("2025-06-14T03:19:40.187Z"),
    interpretation: "Elle est meilleur que dans la confiance en soi. J'ai peur de la blesser en lui disant non",
    emotions_avant: [
      "Peur"
    ],
    contre_pensee_negative: "Personne n'est meilleur que l'autre que par la piété. C'est Dieu qui donne les forces, les qualités, etc... ",
    emotions_apres: [
      "Joie"
    ],
    id: 3
  },
  {
    element_declencheur: "Je regarde le gars pour le voir parler",
    date: new Date("2025-06-15T03:11:56.404Z"),
    interpretation: "OOOHHHH ! Nous sommes en compétition. ",
    emotions_avant: [
      "Peur",
      "Colère"
    ],
    contre_pensee_negative: "Tu as une bonne intention. Tu vas juste voir, pas te baguarrer. Si tu sens que ton égo t'appelle, arrête de le regarder. ",
    emotions_apres: [
      "Joie"
    ],
    id: 4
  }
];

export function getPenseeByDate(date: Date) : PenseeData | undefined {
  const pensee = pensée_datas.find(p => p.date.toISOString().split('T')[0] == date.toISOString().split('T')[0]);
  
  if(pensee == undefined) {
        throw new Error(`The 'pensée' with this date ${date.toISOString().split('T')[0]} is unfound`);

  } else {
    return pensee;
  }
  
}