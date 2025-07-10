import SolutionData from '@/app/Domaine/Classes/SolutionData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getSolution, getSolutionById, removeSolution, storeSolution } from '../DataSolutionDataBD';

describe('SolutionDataBD', () => {
  test('given a solutionData, when we store this, then we obtain this object', async () => {
    //Mise en place
  const new_solution: SolutionData = {
    id: 4,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
    createdAt: new Date("2025-06-12T16:59:00.667Z"),
  };

  //Action
  await storeSolution(new_solution);
  const solution_obtained = await getSolution('my-key');

  //Check
  expect(solution_obtained).toEqual({
    ...new_solution,
    createdAt: new_solution.createdAt?.toISOString(),
  });
  });

  test('should call AsyncStorage.getItem with "my-key"', async () => {
    //Action
    await getSolution('my-key');

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
    const solution_deleted = await removeSolution();

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
  await storeSolution(solution_updated);
  const solution_obtained = await getSolution('my-key');

  //Check
  expect(solution_obtained).toEqual({
    ...solution_updated,
    createdAt: solution_updated.createdAt?.toISOString(),
  });
  });

  test('given a list of SolutionData, when we search a solution by id, then we obtain the objet of SolutionData', async () => {
    //Mise en place
  const solution_expected: SolutionData = {
    id: 4,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.Ressens et réflechis. ',
    createdAt: new Date("2025-06-12T16:59:00.667Z"),
  };

  //Action
  const solution_obtained = await getSolutionById(4);

  //Check
  expect(solution_obtained).toEqual({
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
  await storeSolution(solution_updated);
  const solution_obtained = await getSolution('my-key');

  //Check
  expect(solution_obtained).toEqual({
    ...solution_updated,
    createdAt: solution_updated.createdAt?.toISOString(),
  });
  });

  test('given a list of SolutionData, when we search a solution by id, then we obtain the objet of SolutionData', async () => {
    //Mise en place
  const solution_expected: SolutionData = {
    id: 4,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.Ressens et réflechis. ',
    createdAt: new Date("2025-06-12T16:59:00.667Z"),
  };

  //Action
  const solution_obtained = await getSolutionById(4);

  //Check
  expect(solution_obtained).toEqual({
    ...solution_expected,
    createdAt: solution_expected.createdAt?.toISOString(),
  });
  });

  test('given a list of SolutionData, when we search a solution by unexisted id, then we obtain a specific message', async () => {
    
    await expect(getSolutionById(5)).rejects.toThrow("The solution with the id 5 not found");
  });

});