import { getPenseeByDate, getPenseeById, updatePensee } from "../DataBidonPenseeData";

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

    test('given a list of penseeData, when the user search one by unexisted date, then he obtains a new PenseeData with this Date', () => {
        //Set up
        const date = new Date("2025-06-25T05:11:37.962Z");
        const pensee_expected = {
            id : 6, 
          element_declencheur : "", 
          interpretation: "", 
          date: date, 
          emotions_avant: [], 
          contre_pensee_negative : "", 
          emotions_apres : []
        };
        //Action
        const new_pensee = getPenseeByDate(date);
        

        //Check
        expect(new_pensee).toStrictEqual(pensee_expected);

    });

    test("given a penseeData of the #1, when the user update only the element déclencheur, then he obtains this full updated object", () => {
        //Set up
        const updated_pensee = {
            element_declencheur: "La sécurité m'a dit de venir à l'hôpital",
            id: 1
        };
        
        //Action
        const updated_pensee_obtained = updatePensee(updated_pensee);
        const expected_pensee = getPenseeById(updated_pensee.id);

        //Check
        expect(updated_pensee_obtained).toBe(expected_pensee);

    });

});