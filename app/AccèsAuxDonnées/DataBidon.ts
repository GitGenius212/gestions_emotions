import { SolutionData } from "../Domaine/Classes/SolutionData";


export const solutions_datas: SolutionData[] = [
  {
    id: 1,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
    createdAt: new Date("2025-06-12T16:59:00.667Z"),

  },
  {
    id: 2,
    description: "Note tes pensées négatives et les émotions qu'elles suscitent.",
    createdAt: new Date("2025-06-12T07:59:00.667Z"),
  },
  {
    id: 3,
    description: 'Identifie les émotions que tu ressens.',
    createdAt: new Date("2025-06-12T08:59:00.667Z"),
  },
    {
    id: 4,
    description: 'Écris une contre-pensée pour chaque pensée négative. essens.',
    createdAt: new Date("2025-06-13T09:59:09.667Z"),
  }, 
  
];

export function removeSolution(id: number) {
  //Déclaration de variables
  let trouve = false;

  //Traitements
  for (let i=0; i< solutions_datas.length; i++) {
    if(solutions_datas[i].id == id) {
        trouve = true;
        //remove the solution
        solutions_datas.splice(i, 1);
        console.log(solutions_datas)
        //Stop the loop
        break;

    } 
    
  }

  if(!trouve) {
      console.error(`The solution with this id ${id} not found`)
    }
  
  
}

