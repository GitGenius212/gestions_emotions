import SolutionData from '@/app/Domaine/Classes/SolutionData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value : SolutionData) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
    return jsonValue;
  } catch (e) {
        console.error(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return (jsonValue != null) ? JSON.parse(jsonValue) : null;
  } catch (e) {
        console.error(e);
  }
};


export const removeValue = async () => {
  try {
    const solution_toDelete = getData()
    await AsyncStorage.removeItem('my-key')
    return solution_toDelete;
  } catch(e) {
    console.error(e);
  }

  console.log('Done.')
}