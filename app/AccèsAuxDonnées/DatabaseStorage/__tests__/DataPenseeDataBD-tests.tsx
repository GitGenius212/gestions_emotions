import PenseeData from '@/app/Domaine/Classes/PenseeData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addPensee, getPenseesWithSameDate } from '../DatatPenseesDataBD';

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

test('given a pensee, when he update the pensee, then he obtains the full pensee updated', () => {

});

test('given a pensee, when the user delete this object, then he obtains the pensee deleted', () => {

});
});
