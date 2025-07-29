import PenseeData from '@/app/Domaine/Classes/PenseeData';
import PenseeDataOptions from '@/app/Domaine/Classes/PenseeDataOptions';
import AsyncStorage from '@react-native-async-storage/async-storage';



//GET
export const getPenseesWithSameDate = async (p_date: Date) : Promise<PenseeData[]> => {
  //Déclaration de variables
  let pensees_same_date : PenseeData[] = [];
  const keys = await getAllPenseeKeys();
  //Traitements
  for(let key of keys) {
    let pensee = await getPensee(key);
    let date_pensee = new Date(pensee.date);
    if(date_pensee.toISOString().split('T')[0] == p_date.toISOString().split('T')[0]) {
      pensees_same_date.push(pensee);
    }
  }


  if(pensees_same_date.length == 0) {
    let pensee : PenseeData = {
      id : 0, 
      element_declencheur : "", 
      interpretation: "", 
      date: p_date, 
      emotions_avant: [], 
      contre_pensee_negative : "", 
      emotions_apres : [],
    };

    pensee = await addPensee(pensee);
    console.log(`Aucune pensée trouvée pour la date ${p_date}`);

    pensees_same_date.push(pensee);
  }

  //Affichages/Sorties
  return pensees_same_date;
};

const getPensee = async (p_myKey: string) : Promise<PenseeData> => {
  //Déclaration de variables
  let pensee : PenseeData = undefined as any;
  //Traitements
  try {
    const jsonValue = await AsyncStorage.getItem(p_myKey);
    pensee = (jsonValue != null) ? JSON.parse(jsonValue) : null;

  } catch(e) {
    console.log("getPensee() => ", e);
  }

  //Affichages/Sorties
  return pensee;

}

const getMaximumId = async () : Promise<number> => {
  //Déclaration de variables
  let largestId = 0;
  const keys = await getAllPenseeKeys();

  //Traitements
  for(let key of keys) {
    let pensée = await getPensee(key);
    if(pensée.id != undefined && pensée.id > largestId) {
      largestId = pensée.id;
    }
  }

  //Affichages/Sorties
  return largestId;
}

const getAllPenseeKeys = async ()  : Promise<readonly string[]> => {
  //Déclaration de variables
  let keys = [] as readonly string[];

  //Traitenments
  try {
    keys = (await AsyncStorage.getAllKeys()).filter(filterPensees);
  } catch(e) {
    console.error("getAllPenseeKeys() => ", e);
  }

  //Affichage/Sorties
  return keys;
  
}

function filterPensees(value: string) {
  return value.startsWith("Pensée");
}

export async function getAllPensees() : Promise<PenseeData[]> {
  //Déclaration de variables
  let pensees_datas_bd : PenseeData[] = [];
  const keys = await getAllPenseeKeys();

  //Traitements
  for(let key of keys) {
      let solution = await getPensee(key);
      pensees_datas_bd.push(solution);
  }
  //Affichages/Sorties
  return pensees_datas_bd;
}

export async function getPenseeById(p_id:number) : Promise<PenseeData> {
  //Déclaration de variables
  const solutions_datas_bd = await getAllPensees();
  let penseeTrouvee : PenseeData = undefined as any;

  //Traitements
  for(let s of solutions_datas_bd) {
    if(s.id == p_id) {
      penseeTrouvee = s;
    }
  }
  
  if(penseeTrouvee == undefined) {
        throw new Error(`The solution with the id ${p_id} not found`);
    }

  return penseeTrouvee;
}

export async function getPenseesFillForm() : Promise<PenseeData[]> {
  //Déclaration de variables
  const penseesFills : PenseeData[] = [];
  const existedListPensees = await getAllPensees();

  //Traitements
  for (let p of existedListPensees) {
      if(p.element_declencheur != "" || p.contre_pensee_negative != "" || p.interpretation != "" || 
        p.emotions_apres.length > 0 || p.emotions_avant.length > 0) {
        penseesFills.push(p);
      }
  }

  //Affichages/Sorties
  return penseesFills;
}

export async function clearPenseesEmpty() {
  //Déclaration de variables
  const existedListPensees = await getAllPensees();
  const penseesEmpties : PenseeData[] = [];
  const keys : string[] = [];

  //Traitements

  //1. Get the list of the empties pensees
  for (let p of existedListPensees) {
      if(p.element_declencheur == "" && p.contre_pensee_negative == "" && p.interpretation == "" && 
        p.emotions_apres.length == 0 && p.emotions_avant.length == 0) {
        penseesEmpties.push(p);
      }
  }

  if(penseesEmpties.length > 0) {
    for(let pe of penseesEmpties) {
      keys.push(`Pensée#${pe.id}`);
    }

    try {
    await AsyncStorage.multiRemove(keys);

    } catch(e) {
      console.error("clearPenseesEmpty() with multiRemove() => ", e);
    }

  }
 
}

//POST
export const addPensee = async (p_pensee: PenseeData) : Promise<PenseeData> => {
  //Déclaration de variables
  let new_id = 0;
  let new_pensee : PenseeData = undefined as any;

  //Traitements

  try {
    
    //Set up the object
      new_id = await getMaximumId() + 1;
      p_pensee.id = new_id;
      const jsonValue = JSON.stringify(p_pensee);
      new_pensee = JSON.parse(jsonValue);

    await AsyncStorage.setItem(`Pensée#${p_pensee.id}`, jsonValue);
  } catch (e) {
      console.error("addPensee => ", e);
  }

  //Affichages/Sorties
  return new_pensee;
};


//PUT
export const updatePensee = async (p_pensee_params: PenseeDataOptions) : Promise<PenseeData> => {
  //Déclaration de variables
  let updated_pensee: PenseeData = undefined as any;

  //Traitements

  

  try {

    //1. Prendre l'objet existant
  const existedPensée = await getPenseeById(p_pensee_params.id ?? 0);

    //2. Modifier l'objet selon ce qui est donné en paramètre
    existedPensée.element_declencheur = p_pensee_params.element_declencheur ?? existedPensée.element_declencheur;
    existedPensée.interpretation = p_pensee_params.interpretation ?? existedPensée.interpretation;
    existedPensée.date = p_pensee_params.date ?? existedPensée.date;    
    existedPensée.emotions_avant = p_pensee_params.emotions_avant ?? existedPensée.emotions_avant;
    existedPensée.contre_pensee_negative = p_pensee_params.contre_pensee_negative ?? existedPensée.contre_pensee_negative;
    existedPensée.emotions_apres = p_pensee_params.emotions_apres ?? existedPensée.emotions_apres;
    updated_pensee = existedPensée;

    const jsonValue = JSON.stringify(existedPensée);
    await AsyncStorage.setItem(`Pensée#${p_pensee_params.id}`, jsonValue);

  } catch(e) {
    console.error("updatePensee() => ", e);
  }

  //Affichages/Sorties
  return updated_pensee;
}

//DELETE
export const deletePenseeById = async (p_id: number) : Promise<PenseeData> => {
  //Déclaration de variables
  const pensee_deleted = await getPenseeById(p_id);

  //Traitements
  try {
    await AsyncStorage.removeItem(`Pensée#${p_id}`);
  } catch(e) {
    console.error("deletePenseeById() => ", e);
  }

  //Affichage/Sorties
  return pensee_deleted;
}

