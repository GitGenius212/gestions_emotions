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
  console.log(id-1);
    solutions_datas.splice(id-1, 1)
}