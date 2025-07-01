import SolutionData from "../../Domaine/Classes/SolutionData";


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

  if(!solutions_datas.find(s => s.id == solution.id)) 
    throw new Error(`The solution with this id ${solution.id} not found`);

  for(let i = 0; i < solutions_datas.length;i++) {
    if(solutions_datas[i].id == solution.id) {
        solutions_datas[i] = solution;
    }
  }
  return solutions_datas
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



