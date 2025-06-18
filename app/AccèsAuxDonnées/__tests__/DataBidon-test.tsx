import { addSolution, removeSolution, solutions_datas } from "../DataBidon";

describe('SolutionData', () => {

    test('given a user, when he add a new solution, then he obtains the list of all the solutions including it', () => {
            //Set up
            const new_solution =   {
                description: "Sois toi-même ! Ils doivent t'accepter tel que tu es "

            }

            const expected_list_solutions =  [
                {
                    id: 5, 
                    description: "Sois toi-même ! Ils doivent t'accepter tel que tu es ",
                    createdAt: new Date(),

                }, 

                {
                    id: 1,
                    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
                    createdAt: new Date("2025-06-12T16:59:00.667Z"),

                },
                {
                    id: 2,
                    description: "Note tes pensées négatives et les émotions qu'elles suscitent.",
                    createdAt: new Date("2025-06-12T07:59:00.667Z"),
                },
                {
                    id: 3,
                    description: 'Identifie les émotions que tu ressens.',
                    createdAt: new Date("2025-06-12T08:59:00.667Z"),
                },
                    {
                    id: 4,
                    description: 'Écris une contre-pensée pour chaque pensée négative. Ressens.',
                    createdAt: new Date("2025-06-13T09:59:09.667Z"),
                }
                
  
            ];

            //Action
            addSolution(new_solution);

            //Check
            expect(solutions_datas).toStrictEqual(expected_list_solutions);
    });

    test('given a user, when he removes a solution of id #1, then he obtain the rest of the list', () => {
        //Set up

        const expected_list_solutions = solutions_datas.filter(item => item.id != 1);

        //Action
        removeSolution(1);

        //Check
        expect(solutions_datas).toStrictEqual(expected_list_solutions);
    });

    test('given a user, when he removes a solution of id not found, then he obtain a specific error message thrown', () => {
        //Set up

        //Action
        function removeSolution_NOT_FOUND() {
            removeSolution(0);
        }
        //Check
        expect(removeSolution_NOT_FOUND).toThrow(new Error("The solution with this id 0 not found"));
    });


    

});