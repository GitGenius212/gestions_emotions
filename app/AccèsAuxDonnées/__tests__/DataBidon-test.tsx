import { addSolution, putSolution, removeSolution, solutions_datas } from "../DataBidon";

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
                    id: 4,
                    description: 'Sois Conscient de tes émotions et de leurs déclencheurs.',
                    createdAt: new Date("2025-06-12T16:59:00.667Z"),

                },
                {
                    id: 3,
                    description: "Note tes pensées négatives et les émotions qu'elles suscitent.",
                    createdAt: new Date("2025-06-12T07:59:00.667Z"),
                },
                {
                    id: 2,
                    description: 'Identifie les émotions que tu ressens.',
                    createdAt: new Date("2025-06-12T08:59:00.667Z"),
                },
                    {
                    id: 1,
                    description: 'Écris une contre-pensée pour chaque pensée négative. Ressens.',
                    createdAt: new Date("2025-06-13T09:59:09.667Z"),
                }
                
  
            ];

            //Action
            addSolution(new_solution);

            //Check
            expect(solutions_datas).toStrictEqual(expected_list_solutions);
    });

    test('given an existed solution with the id 1, when the user add a new solution with the id 1, then he obtains the list without this solution', () => {
        //Set up
        const new_solution =   {
            id: 1, 
            description: "Sois toi-même ! Ils doivent t'accepter tel que tu es "

        }
        //Action
        function addSolution_CONFLICT() {
           addSolution(new_solution);
        }
        //Check
        expect(addSolution_CONFLICT).toThrow(new Error("The solution with this id 1 already exists"));
    });

    test('given a user, when he removes a solution of id #5, then he obtain the rest of the list', () => {
        //Set up

        const expected_list_solutions = solutions_datas.filter(item => item.id != 5);

        //Action
        removeSolution(5);

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

    test('given a user, when he updates a solution, then he obtains all the solutions with the updated solution', () => {
        //Set up
        const updated_solution = {
                id: 4,
                description: 'Sois Conscient de tes émotions et de leurs déclencheurs bro. Arrête de niaiser',
                createdAt: new Date("2025-06-12T16:59:00.667Z"),

                
        };

        const expected_list_solutions =   [
                updated_solution, 
                
                {
                    id: 3,
                    description: "Note tes pensées négatives et les émotions qu'elles suscitent.",
                    createdAt: new Date("2025-06-12T07:59:00.667Z"),
                },
                {
                    id: 2,
                    description: 'Identifie les émotions que tu ressens.',
                    createdAt: new Date("2025-06-12T08:59:00.667Z"),
                }, 
                {
                    id: 1,
                    description: 'Écris une contre-pensée pour chaque pensée négative. Ressens.',
                    createdAt: new Date("2025-06-13T09:59:09.667Z"),
                }
                
  
            ];


        
        //Action & Check
        expect(putSolution(updated_solution)).toStrictEqual(expected_list_solutions);
    });

    test('given a user, when he tries to update a solution of an unexisted id, then he obtains a specific error message thrown', () => {
        //Set up
        const unexistant_solution_id = {
                id: 0,
                description: 'Sois Conscient de tes émotions et de leurs déclencheurs bro. Arrête de niaiser',
                createdAt: new Date("2025-06-12T16:59:00.667Z"),

                
        };
        //Action
        function updateSolution_NOT_FOUND() {
            putSolution(unexistant_solution_id);
        }
        //Check
        expect(updateSolution_NOT_FOUND).toThrow(new Error("The solution with this id 0 not found"));
    });
    

});