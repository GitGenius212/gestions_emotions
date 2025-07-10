import SolutionData from '@/app/Domaine/Classes/SolutionData';
import AsyncStorage from '@react-native-async-storage/async-storage';


//PUT, POST
export const storeSolution = async (value : SolutionData) : Promise<SolutionData> => {
  //Déclaration de variables
  let new_solution : SolutionData = undefined as any;

  //Traitements
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
    new_solution = JSON.parse(jsonValue);

  } catch (e) {
        console.error(e);
  }

  //Sorties/Affichages
  return new_solution;

};


//GET
export const getSolution = async (p_myKey: string) : Promise<SolutionData> => {
  //Déclaration de variables
  let solution : SolutionData = undefined as any;
  try {
    const jsonValue = await AsyncStorage.getItem(p_myKey);
    solution = (jsonValue != null) ? JSON.parse(jsonValue) : null;
    
  } catch (e) {
        console.error("getSolution() => ", e);
  }

  return solution;
};


//DELETE
export const removeSolution = async () => {
  try {
    const solution_toDelete = getSolution('my-key');
    await AsyncStorage.removeItem('my-key');
    return solution_toDelete;
  } catch(e) {
    console.error(e);
  }

  console.log('Done.');
}

//GET
export async function getSolutionById(p_id:number) : Promise<SolutionData> {
  //Déclaration de variables
  const keys = await getAllKeys();
  let solutionTrouve : SolutionData = undefined as any;

  //Traitements
  for(let key of keys) {
    let solution = await getSolution(key);
    if(solution.id == p_id) {
      solutionTrouve = solution;
    }
  }
  
  if(solutionTrouve == undefined) {
        throw new Error(`The solution with the id ${p_id} not found`);
    }

  return solutionTrouve;
}

const getAllKeys = async ()  : Promise<readonly string[]> => {
  //Déclaration de variables
  let keys = [] as readonly string[];

  //Traitenments
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch(e) {
    console.error("getAllKeys() => ", e);
  }

  //Affichage/Sorties
  return keys;
  
}



