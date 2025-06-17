import { removeSolution, solutions_datas } from "../DataBidon";

describe('SolutionData', () => {
    test('given a user, when he removes a solution of id #1, then he obtain the rest of the list', () => {
        //Set up

        const expected_list_solutions = solutions_datas.filter(item => item.id != 1);

        //Action
        removeSolution(1);

        //Check
        expect(solutions_datas).toStrictEqual(expected_list_solutions);
    });
});