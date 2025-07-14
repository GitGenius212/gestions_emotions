import PenseeData from '@/app/Domaine/Classes/PenseeData';
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


// //PUT
// const updatePensee = async (p_pensee_params: PenseeDataOptions) : Promise<PenseeData> => {
//   try {
//     const jsonValue = JSON.stringify(p_pensee_params);
//     await AsyncStorage.setItem('key', jsonValue);
//   } catch(e) {
//     // save error
//   }

//   console.log('Done.')
// }

// //DELETE
// const deletePenseeById = async (p_id: number) : Promise<PenseeData> => {
//   try {
//     await AsyncStorage.removeItem('@MyApp_key')
//   } catch(e) {
//     // remove error
//   }

//   console.log('Done.')
// }

