import SolutionData from '@/app/Domaine/Classes/SolutionData';
import AsyncStorage from '@react-native-async-storage/async-storage';


//POST
export const storeSolution = async (value : SolutionData) : Promise<SolutionData> => {
  //Déclaration de variables
  let new_solution : SolutionData = undefined as any;

  //Traitements

  try {
    
      //Set up the object
      let new_id = await getMaximumId() + 1;
      value.id = new_id;
    

    value.createdAt = new Date();
    const jsonValue = JSON.stringify(value);
    new_solution = JSON.parse(jsonValue);
    

    await AsyncStorage.setItem(`Solution#${value.id}`, jsonValue);
    

  } catch (e) {
        console.error("storeSolution() =>", e);
  }

  //Sorties/Affichages
  return new_solution;

};


//PUT
export const putSolution = async (value : SolutionData) : Promise<SolutionData[]> => {
  //Déclaration de variables
  let list_solution_updated : SolutionData[] = [];

  //Traitements

  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`Solution#${value.id}`, jsonValue);
    list_solution_updated = await getAllSolutions();
    

  } catch (e) {
        console.error("storeSolution() =>", e);
  }

  //Sorties/Affichages
  return list_solution_updated

};


//GET
export async function getAllSolutions() : Promise<SolutionData[]> {
  //Déclaration de variables
  let solutions_datas_bd : SolutionData[] = [];
  const keys = await getAllSolutionKeys();

  //Traitements
  for(let key of keys) {
      let solution = await getSolution(key);
      solutions_datas_bd.push(solution);
  }
  //Affichages/Sorties
  return solutions_datas_bd;
}


export async function getSolutionById(p_id:number) : Promise<SolutionData> {
  //Déclaration de variables
  const solutions_datas_bd = await getAllSolutions();
  let solutionTrouve : SolutionData = undefined as any;

  //Traitements
  for(let s of solutions_datas_bd) {
    if(s.id == p_id) {
      solutionTrouve = s;
    }
  }
  
  if(solutionTrouve == undefined) {
        throw new Error(`The solution with the id ${p_id} not found`);
    }

  return solutionTrouve;
}

const getAllSolutionKeys = async ()  : Promise<readonly string[]> => {
  //Déclaration de variables
  let keys = [] as readonly string[];

  //Traitenments
  try {
    keys = (await AsyncStorage.getAllKeys()).filter(filterSolution);
  } catch(e) {
    console.error("getAllSolutionKeys() => ", e);
  }

  //Affichage/Sorties
  return keys;
  
}

function filterSolution(value: string) {
  return value.startsWith("Solution#");
}

const getMaximumId = async () : Promise<number> => {
  //Déclaration de variables
  let largestId = 0;
  const keys = await getAllSolutionKeys();

  //Traitements
  for(let key of keys) {
    let solution = await getSolution(key);
    if(solution.id != undefined && solution.id > largestId) {
      largestId = solution.id;
    }
  }

  //Affichages/Sorties
  return largestId;
}


export const getSolution = async (p_myKey: string) : Promise<SolutionData> => {
  //Déclaration de variables
  let solution : SolutionData = undefined as any;

  //Traitements
  try {
    const jsonValue = await AsyncStorage.getItem(p_myKey);
    solution = (jsonValue != null) ? JSON.parse(jsonValue) : null;
    
  } catch (e) {
        console.error("getSolution() => ", e);
  }

  //Affichage/Sorties
  return solution;
};


//DELETE
export const removeSolution = async (p_id: number) => {
  try {
    const solution_toDelete = await getSolutionById(p_id);
    await AsyncStorage.removeItem(`Solution#${p_id}`);
    return solution_toDelete;
  } catch(e) {
    console.error("removeSolution() => ", e);
  }

  console.log('Done.');
}








