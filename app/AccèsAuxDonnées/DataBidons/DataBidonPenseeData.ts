import PenseeDataOptions from "@/app/Domaine/Classes/PenseeDataOptions";
import PenseeData from "../../Domaine/Classes/PenseeData";


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
  }, 
  {
    element_declencheur: "Je regarde le gars pour le voir parler",
    date: new Date("2025-06-16T03:11:56.404Z"),
    interpretation: "OOOHHHH ! Il fait trop le mec cool. Je n'aime pas ça",
    emotions_avant: [
      "Dégoût",
      "Colère"
    ],
    contre_pensee_negative: "Alhamdoulilah que tu agis uniquement pour plaire à Dieu",
    emotions_apres: [
      "Frustration"
    ],
    id: 5
  }, 
  {
    element_declencheur: "Je marchais dans le métro",
    date: new Date("2025-06-12T05:15:37.962Z"),
    interpretation: "OOOHHHH ! J'ai peur qu'ils me font du mal en m'intimidant et en me criant dessus",
    emotions_avant: [
      "Peur"
    ],
    contre_pensee_negative: "C'est juste une imagination qui te fait peur. Tu n'as pas à avoir peur d'eux, mais de Dieu.",
    emotions_apres: [
      "Joie"
    ],
    id: 6
  },
  {
    element_declencheur: "Je parlais avec ma mère",
    date: new Date(),
    interpretation: `OOOHHHH ! Je dois dire ça ! OOOHH ! Je dpois faire ça ! Je suis incapable de faire ça ! 
    J'ai peur qu'elle me juge et qu'elle me critique`,
    emotions_avant: [
      "Peur"
    ],
    contre_pensee_negative: "C'est juste une imagination qui te fait peur. Tu n'as pas à avoir peur d'eux, mais de Dieu.",
    emotions_apres: [
      "Joie"
    ],
    id: 7
  }
];

export function getPenseeByDate(date: Date) : PenseeData | undefined {
  let pensee = pensée_datas.find(p => p.date.toISOString().split('T')[0] == date.toISOString().split('T')[0]);
  
  
  if(pensee == undefined) {
    throw new Error(`the pensee with this date ${date.toISOString().split('T')[0]} is unfound`);
  } 

    return pensee;
  
}

export function getPenseeWithSameDate(date: Date) : PenseeData[] {
  //Déclaration de variables
  let pensees_same_date : PenseeData[] = [];

  //Traitements
  for (let p of pensée_datas) {
    if(p.date.toISOString().split('T')[0] == date.toISOString().split('T')[0]) {
      pensees_same_date.push(p);
    }
  }

  if(pensees_same_date.length == 0) {
    let pensee : PenseeData = {
      id : 0, 
      element_declencheur : "", 
      interpretation: "", 
      date: date, 
      emotions_avant: [], 
      contre_pensee_negative : "", 
      emotions_apres : [],
    };

    pensee = addPensee(pensee);

    pensees_same_date.push(pensee);
  }

  //Affichages/Sorties
  return pensees_same_date;

}

export function addPensee(p_pensee: PenseeData) : PenseeData {
  //Déclaration de variables
  let new_id = 0;
  let largestId = 0;
  let new_pensee : PenseeData = undefined as any;
  //Traitements
  for (let p of pensée_datas) {
      if(p.id > largestId) {
        largestId = p.id;
        
      }
  }

    new_id = largestId + 1;
    p_pensee.id = new_id;

  pensée_datas.push(p_pensee);

  for (let p of pensée_datas) {
      if(p.id == new_id) {
        new_pensee = p;
        
      }
  }

  return new_pensee;

}

export function getPenseeById(id: number) : PenseeData | undefined {
  const pensee = pensée_datas.find(p => p.id == id);
  
  if(pensee == undefined) {
        throw new Error(`The 'pensée' with this id ${id} is unfound`);

  } else {
    return pensee;
  }
  
}

export function updatePensee(p_pensee_params: PenseeDataOptions) : PenseeData {
  //Déclaration de variables
  let updated_pensee: PenseeData = undefined as any;

  //Traitements
  for(const element of pensée_datas) {
    if(element.id == p_pensee_params.id) {
      element.element_declencheur = p_pensee_params.element_declencheur ?? element.element_declencheur;
      element.interpretation = p_pensee_params.interpretation ?? element.interpretation;
      element.date = p_pensee_params.date ?? element.date;    
      element.emotions_avant = p_pensee_params.emotions_avant ?? element.emotions_avant;
      element.contre_pensee_negative = p_pensee_params.contre_pensee_negative ?? element.contre_pensee_negative;
      element.emotions_apres = p_pensee_params.emotions_apres ?? element.emotions_apres;
      updated_pensee = element;
    }
  }

  //Sorties/Affichages
  return updated_pensee;

}