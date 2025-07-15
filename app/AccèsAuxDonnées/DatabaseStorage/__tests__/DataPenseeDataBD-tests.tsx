import PenseeDataOptions from '@/app/Domaine/Classes/PenseeDataOptions';
import { addPensee, clearPenseesEmpty, deletePenseeById, getAllPensees, getPenseesFillForm, getPenseesWithSameDate, updatePensee } from '../DatatPenseesDataBD';

const date = new Date();
const unexisted_date = new Date("2025-05-05");
describe('PenseeDataBD', () => {
    test('given a list of pensee, when the user select a date inexisted in  database, then he obtains the new pensee object', async () => {
        //Set up
        const new_pensee  = {
                id : 0, 
                element_declencheur : "", 
                interpretation: "", 
                date:date, 
                emotions_avant: [], 
                contre_pensee_negative : "", 
                emotions_apres : [],
        };

        const pensee_exepcted =  {
                id : 1, 
                element_declencheur : "", 
                interpretation: "", 
                date:date.toISOString(), 
                emotions_avant: [], 
                contre_pensee_negative : "", 
                emotions_apres : [],
        };
        //Action
        const pensee_obtained = await addPensee(new_pensee);

        //Check
        expect(pensee_obtained).toEqual(pensee_exepcted);
});

test('given a list of pensee, when the user select a date inexisted in  database, then he obtains the new pensee object', async () => {
        //Set up
        const new_pensee  = {
                id : 0, 
                element_declencheur : "", 
                interpretation: "", 
                date:date, 
                emotions_avant: [], 
                contre_pensee_negative : "", 
                emotions_apres : [],
        };

        const pensee_exepcted =  {
                id : 2, 
                element_declencheur : "", 
                interpretation: "", 
                date:date.toISOString(), 
                emotions_avant: [], 
                contre_pensee_negative : "", 
                emotions_apres : [],
        };
        //Action
        const pensee_obtained = await addPensee(new_pensee);

        //Check
        expect(pensee_obtained).toEqual(pensee_exepcted);
});

test('given a list of pensee, when the user search all the pensee for a specific date, then he obtains a list of pensees with the same date', async () => {
        //Set up
        const list_expected = [
            {
                id : 1, 
                element_declencheur : "", 
                interpretation: "", 
                date:date.toISOString(), 
                emotions_avant: [], 
                contre_pensee_negative : "", 
                emotions_apres : [],
            }, 

            {
                id : 2, 
                element_declencheur : "", 
                interpretation: "", 
                date:date.toISOString(), 
                emotions_avant: [], 
                contre_pensee_negative : "", 
                emotions_apres : [],
            }
        ]


        //Action
        const list_obtained = await getPenseesWithSameDate(date);

        //Check
        expect(list_obtained).toEqual(list_expected);
});

test('given a list of pensee, when the user search the pensees with a an unexisted date, then he obtains a new list containing an empty pensee object', async () => {
        //Set up

        const list_pensee_expected =  [
            {
                id : 3, 
                element_declencheur : "", 
                interpretation: "", 
                date:unexisted_date.toISOString(), 
                emotions_avant: [], 
                contre_pensee_negative : "", 
                emotions_apres : [],
            }
        ];
        //Action
        const list_pensee_obtained = await getPenseesWithSameDate(unexisted_date);

        //Check
        expect(list_pensee_obtained).toEqual(list_pensee_expected);
});

test('given a pensee, when he update the pensee, then he obtains the full pensee updated', async () => {
        //Set up
        const params_updated : PenseeDataOptions = {
                id: 1, 
                element_declencheur : "Je regarde le gars pour le voir parler", 
                interpretation: "OOOHHHH ! Nous sommes en compétition. ", 
                emotions_avant: ["Peur", "Colère"], 
                contre_pensee_negative : "", 
                emotions_apres : ["Joie"],
        }

        const updated_pensee_expected = {
                id : 1, 
                element_declencheur : "Je regarde le gars pour le voir parler", 
                interpretation: "OOOHHHH ! Nous sommes en compétition. ", 
                date:date.toISOString(), 
                emotions_avant: ["Peur", "Colère"], 
                contre_pensee_negative : "", 
                emotions_apres : ["Joie"],
        };

        //Action
        const updated_pensee_obtained = await updatePensee(params_updated);

        //Check
        expect(updated_pensee_obtained).toEqual(updated_pensee_expected);
});

test('given a pensee with an id 3, when the user delete this object, then he obtains the pensee deleted', async () => {
        //Set up
        const pensee_deleted_expected = {
                id : 3, 
                element_declencheur : "", 
                interpretation: "", 
                date:unexisted_date.toISOString(), 
                emotions_avant: [], 
                contre_pensee_negative : "", 
                emotions_apres : [],
            }

        //Action
        const pensee_deleted_obtained = await deletePenseeById(3);

        //Check
        expect(pensee_deleted_obtained).toEqual(pensee_deleted_expected);

});

test('given a list of penseeData, when the user want to show all the pensee that he has fill, then he obtains a list of penseeData with some filling the pensee', async () => {
        //Set up
        const list_pensee_fill_expected = [
                {
                        id : 1, 
                        element_declencheur : "Je regarde le gars pour le voir parler", 
                        interpretation: "OOOHHHH ! Nous sommes en compétition. ", 
                        date:date.toISOString(), 
                        emotions_avant: ["Peur", "Colère"], 
                        contre_pensee_negative : "", 
                        emotions_apres : ["Joie"],
                }
        ];

        //Action
        const list_pensees_fill_obtained = await getPenseesFillForm();

        //Check
        expect(list_pensees_fill_obtained).toEqual(list_pensee_fill_expected);
});

test('given a list of empties pensees, when the user enter in the application, then he will obtains only the pensee with Fill Form', async() => {
        //Set up
        const new_pensee  = {
                        id : 0, 
                        element_declencheur : "", 
                        interpretation: "", 
                        date:date, 
                        emotions_avant: [], 
                        contre_pensee_negative : "", 
                        emotions_apres : [],
                };

        const list_pensee_fill_expected = [
                        {
                                id : 1, 
                                element_declencheur : "Je regarde le gars pour le voir parler", 
                                interpretation: "OOOHHHH ! Nous sommes en compétition. ", 
                                date:date.toISOString(), 
                                emotions_avant: ["Peur", "Colère"], 
                                contre_pensee_negative : "", 
                                emotions_apres : ["Joie"],
                        }
                ];
        
        await addPensee(new_pensee);
        await addPensee(new_pensee);
        await addPensee(new_pensee);


        //Action
        
        await clearPenseesEmpty();
        const list_pensee_obtained = await getAllPensees();

        //Check
        expect(list_pensee_obtained).toEqual(list_pensee_fill_expected); 
});

});
