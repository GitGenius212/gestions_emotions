import { deletePenseeById, findPenseeById, getPenseeByDate, getPenseesFillForm, getPenseeWithSameDate, pensée_datas, updatePensee } from "../DataBidonPenseeData";

describe('PenseeData', () => {
    test('given a list of penseeData, when the user search one by date, then he obtains the PenseeData object', () => {
        //Set up
        const date = new Date("2025-06-12T05:11:37.962Z");
        const pensee_expected = {
            element_declencheur: "La sécurité m'a dit de venir",
            date: new Date("2025-06-12T05:11:37.962Z"),
            interpretation: "J'ai peur qu'il me fait du mal",
            "emotions_avant": [
            "Peur"
            ],
            contre_pensee_negative: "Sois bien avec toi-même. Prends ton temps",
            emotions_apres: [
            "Joie"
            ],
            id: 1
        };
        //Action
        const pensee_obtained = getPenseeByDate(date);

        //Check
        expect(pensee_obtained).toStrictEqual(pensee_expected);

    });

    test('given a list of penseeData, when the user search one by unexisted date, then he obtains a specific message error', () => {
        //Set up
        const date = new Date("2025-06-25T05:11:37.962Z");
        

        //Action
        function getPenseeByDate_NOT_FOUND() {
            getPenseeByDate(date);
        }
        

        //Check
        expect(getPenseeByDate_NOT_FOUND).toThrow(new Error("the pensee with this date 2025-06-25 is unfound"));

    });

    test("given a penseeData of the #1, when the user update only the element déclencheur, then he obtains this full updated object", () => {
        //Set up
        const updated_pensee = {
            element_declencheur: "La sécurité m'a dit de venir à l'hôpital",
            id: 1
        };
        
        //Action
        const updated_pensee_obtained = updatePensee(updated_pensee);
        const expected_pensee = findPenseeById(updated_pensee.id);

        //Check
        expect(updated_pensee_obtained).toBe(expected_pensee.data);

    });

    test('given a list of PenseeData with the same date, when the user wil select a date, then he will obtains all the PenseeData having this date ', () => {
        //Set up
        const expected_pensees = [
            {
                element_declencheur: "La sécurité m'a dit de venir à l'hôpital",
                date: new Date("2025-06-12T05:11:37.962Z"),
                interpretation: "J'ai peur qu'il me fait du mal",
                emotions_avant: [
                "Peur"
                ],
                contre_pensee_negative: "Sois bien avec toi-même. Prends ton temps",
                emotions_apres: [
                "Joie"
                ],
                id: 1
            },
            {
                element_declencheur: "Je marchais dans le métro",
                date: new Date("2025-06-12T05:15:37.962Z"),
                interpretation: "OOOHHHH ! J'ai peur qu'ils me font du mal en m'intimidant et en me criant dessus",
                emotions_avant: [
                "Peur"
                ],
                contre_pensee_negative: "C'est juste une imagination qui te fait peur. Tu n'as pas à avoir peur d'eux, mais de Dieu.",
                emotions_apres: [
                "Joie"
                ],
                id: 6
            },
        ];
        //Action
        const pensees_obtained = getPenseeWithSameDate(new Date("2025-06-12T05:15:37.962Z"));

        //Check
        expect(pensees_obtained).toStrictEqual(expected_pensees);

    });

    test('given a user, when he removes a pensee of id #4, then he obtains the rest of the list', () => {
            //Set up
    
            const expected_list_pensees = pensée_datas.filter(item => item.id != 4);
    
            //Action
            deletePenseeById(4);
    
            //Check
            expect(pensée_datas).toStrictEqual(expected_list_pensees);
        });
    
        test('given a user, when he removes a pensee of id not found, then he obtains a specific error message thrown', () => {
            //Set up
    
            //Action
            function removePensee_NOT_FOUND() {
                deletePenseeById(0);
            }
            //Check
            expect(removePensee_NOT_FOUND).toThrow(new Error("The pensee with this id 0 not found"));
        });

        test('given a list of pensees, when the app search for all the pensees with some filling form, then he obtains only the pensees not empty', () => {
            
            //Set up
            const expected_list_pensees = pensée_datas.filter(item => item.id != 5);
            console.log("expected_list_pensees => ", expected_list_pensees);
            //Action
            const list_pensees_obtained = getPenseesFillForm();
    
            //Check
            expect(list_pensees_obtained).toStrictEqual(expected_list_pensees);
        });

        test('given a list of penseeData, when the user search one by unexisted date, then he obtains a list containing a new pensee with this date', () => {
        //Set up
        const date = new Date("2025-06-25T05:11:37.962Z");
        const pensee_expected = [
                {
                id : 8, 
            element_declencheur : "", 
            interpretation: "", 
            date: date, 
            emotions_avant: [], 
            contre_pensee_negative : "", 
            emotions_apres : []
            }
        ]
        
        
            const pensees = getPenseeWithSameDate(date);
    
        
        

        //Check
        expect(pensees).toStrictEqual(pensee_expected);

    }); 

});