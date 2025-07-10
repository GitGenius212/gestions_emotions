import SolutionData from '@/app/Domaine/Classes/SolutionData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, removeValue, storeData } from '../DataSolutionDataBD';

describe('SolutionDataBD', () => {
  test('given a solutionData, when we store this, then we obtain this object', async () => {
    //Mise en place
  const new_solution: SolutionData = {
    id: 4,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
    createdAt: new Date("2025-06-12T16:59:00.667Z"),
  };

  //Action
  await storeData(new_solution);
  const solution_obtained = await getData();

  //Check
  expect(solution_obtained).toEqual({
    ...new_solution,
    createdAt: new_solution.createdAt?.toISOString(),
  });
  });

  test('should call AsyncStorage.getItem with "my-key"', async () => {
    //Action
    await getData();

    //Check
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('my-key');
  });

  test('given a SolutionData, when we remove it, then we obtains this solutionData', async () => {
    //Mise en place
    const solution_expected = {
    id: 4,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
    createdAt: new Date("2025-06-12T16:59:00.667Z"),
  };

    //Action
    const solution_deleted = await removeValue();

    //Check
    expect(solution_deleted).toEqual({
    ...solution_expected,
    createdAt: solution_expected.createdAt?.toISOString(),
  });

  

  });

  test('given a solutionData, when we update this, then we obtain this object updated', async () => {
    //Mise en place
  const solution_updated: SolutionData = {
    id: 4,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.Ressens et réflechis. ',
    createdAt: new Date("2025-06-12T16:59:00.667Z"),
  };

  //Action
  await storeData(solution_updated);
  const solution_obtained = await getData();

  //Check
  expect(solution_obtained).toEqual({
    ...solution_updated,
    createdAt: solution_updated.createdAt?.toISOString(),
  });
  });

});