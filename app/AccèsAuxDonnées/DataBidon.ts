import { PenseeData } from "../Domaine/Classes/PenseeData";
import { SolutionData } from "../Domaine/Classes/SolutionData";


export const solutions_datas: SolutionData[] = [
  {
    id: 4,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
    createdAt: new Date("2025-06-12T16:59:00.667Z"),

  },
  {
    id: 3,
    description: "Note tes pensées négatives et les émotions qu'elles suscitent.",
    createdAt: new Date("2025-06-12T07:59:00.667Z"),
  },
  {
    id: 2,
    description: 'Identifie les émotions que tu ressens.',
    createdAt: new Date("2025-06-12T08:59:00.667Z"),
  },
    {
    id: 1,
    description: 'Écris une contre-pensée pour chaque pensée négative. Ressens.',
    createdAt: new Date("2025-06-13T09:59:09.667Z"),
  } 
  
];

function findSolutionById(id:number) {
//Déclaration de variables
  let exists = false;
  let data : SolutionData | undefined = undefined;
  let index :number = -1;

for (let i=0; i< solutions_datas.length; i++) {
    if(solutions_datas[i].id == id) {
        exists = true;
        data = solutions_datas[i];
        index = i;

    } 

}
return {exists, data, index}
  
}

export function putSolution(solution: SolutionData) {
  
}

export function removeSolution(id: number) : SolutionData | undefined {
  //Déclaration de variables
  const solution = findSolutionById(id);


  //Traitements
  if(solution.exists) {
    solutions_datas.splice(solution.index, 1);
  }
  
  
  if(!solution.exists) {
      throw new Error(`The solution with this id ${id} not found`);
  }
   
  //Affichage/Sorties
  return solution.data;
  
}

export function addSolution(solution: SolutionData) : SolutionData{

  //Déclaration de variables
  let new_id :number; 
  let largestId : number | undefined = 0;

  
  //Treatements
  for (let s of solutions_datas) {
    if(s.id != undefined && s.id > largestId) {
      largestId = s.id;
      
    }
  }

  new_id = largestId + 1;
  const check_solution_new_id = findSolutionById(new_id);

  

  //Vérification
  if(check_solution_new_id.exists) {
        throw new Error(`The solution with this id ${new_id} already exists`);
  }


  if(solution.id != undefined) {
    const check_solution = findSolutionById(solution.id);
    if(check_solution.exists) {
        throw new Error(`The solution with this id ${solution.id} already exists`);
    }
  }
  
  //Mise à jour
  solution.id = new_id;
  solution.createdAt = new Date();

  
  


  solutions_datas.unshift(solution);

  //Sorties/Affichage
  return solution;

}

export const pensée_datas : PenseeData[] = [
  {
    element_declencheur: "La sécurité m'a dit de venir",
    date: new Date("2025-06-12T05:11:37.962Z"),
    interpretation: "J'ai peur qu'il me fait du mal",
    "emotions_avant": [
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
    date: new Date("2025-06-12T10:12:54.992Z"),
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
    date: new Date("2025-06-12T03:19:40.187Z"),
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
    date: new Date("2025-06-12T03:11:56.404Z"),
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
]

