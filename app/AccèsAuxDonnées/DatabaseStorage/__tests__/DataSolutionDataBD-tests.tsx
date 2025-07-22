import SolutionData from '@/app/Domaine/Classes/SolutionData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllSolutions, getSolution, getSolutionById, putSolution, removeSolution, storeSolution } from '../DataSolutionDataBD';



describe('SolutionDataBD', () => {
  test('given a solutionData, when we store this, then we obtain this object', async () => {
    //Mise en place
  const new_solution: SolutionData = {
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
  };

  //Action
  await storeSolution(new_solution);
  const solution_obtained = await getSolution('Solution#1');
  
  //Check
  expect(solution_obtained).toEqual({
    ...new_solution,
    createdAt: new_solution.createdAt?.toISOString(),
  });
  });

  test('given a list of SolutionData, when we search all of solutions, then we obtains a list of SolutionData', async () => {


  //Action
  const list_solutions_obtained = await getAllSolutions();
  const date = list_solutions_obtained[0].createdAt;

      //Mise en place
    const list_solutions_expected = [
      {
        id: 1,
        description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
        createdAt: date
      }
    ];

  //Check
  expect(list_solutions_obtained).toEqual(list_solutions_expected);

  });


  test('should call AsyncStorage.getItem with "Solution#4"', async () => {
    //Action
    await getSolution('Solution#4');

    //Check
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('Solution#4');
  });


  test('given a solutionData, when we update this, then we obtain this object updated', async () => {
    //Mise en place
    const date = new Date();
    const solution_updated: SolutionData = {
      id: 1,
      description: 'Sois Conscient de tes émotions et de leurs déclencheurs.Ressens et réflechis. ',
      createdAt: date
    };

    const list_solutions_expected = [
      {
        id: 1,
        description: 'Sois Conscient de tes émotions et de leurs déclencheurs.Ressens et réflechis. ',
        createdAt: date.toISOString(),
      }
    ]
    //Action
    const list_solutions_obtained = await putSolution(solution_updated);
    

    //Check
    expect(list_solutions_obtained).toEqual(list_solutions_expected);

  });

  test('given a list of SolutionData, when we search a solution by id, then we obtain the objet of SolutionData', async () => {
    //Mise en place
    const date = await getAllSolutions();
   
  const solution_expected: SolutionData = {
    id: 1,
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.Ressens et réflechis. ',
    createdAt: date[0].createdAt,
  };

  //Action
  const solution_obtained = await getSolutionById(1);

  //Check
  expect(solution_obtained).toEqual({
    ...solution_expected,
    createdAt: solution_expected.createdAt,
  });
  });

  

  test('given a list of SolutionData, when we search a solution by unexisted id, then we obtain a specific message', async () => {
    
    //Check
    await expect(getSolutionById(0)).rejects.toThrow("The solution with the id 0 not found");
  });

  test('given a SolutionData, when we remove it, then we obtains this solutionData', async () => {
    //Mise en place
    const date = await getAllSolutions();

    const solution_expected = {
      id: 1,
      description: 'Sois Conscient de tes émotions et de leurs déclencheurs.Ressens et réflechis. ',
      createdAt: date[0].createdAt
  };

    //Action
    const solution_deleted = await removeSolution(1);

    //Check
    expect(solution_deleted).toEqual({
    ...solution_expected,
    createdAt: solution_expected.createdAt
  });

  

  });

  test('given a description, when we store this, then we obtain a new object SolutionData', async () => {
    //Mise en place
  const new_solution: SolutionData = {
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
  };

  const solution_expected = {
    id: 1, 
    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
    createdAt : new Date().toISOString()
  };

  //Action
  await storeSolution(new_solution);
  const solution_obtained = await getSolution('Solution#1');

  //Check
  expect(solution_obtained).toEqual(solution_expected);
  });

  test('given a list of PenseeData, when wesearch all solutions, then we obtains a list of solutions sorted by id from bigger to smaller', async () => {
      //Set up
      const new_solution: SolutionData = {
        description: 'Test2',
      };

      await storeSolution(new_solution);

      const date_id_1 = (await getSolutionById(1)).createdAt;

      const list_expected = [
        {
          id: 2, 
          description: 'Test2',
          createdAt : new Date().toISOString()
        }, 
        
        {
          id: 1, 
          description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
          createdAt : date_id_1
        }
      ];
      //Action
      const listObtained = await getAllSolutions();

      //Check
      expect(listObtained).toEqual(list_expected);
  });
  
});