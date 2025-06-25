import { getPenseeBydate } from "../DataBidonPenseeData";

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
        const pensee_obtained = getPenseeBydate(date);

        //Check
        expect(pensee_obtained).toStrictEqual(pensee_expected);

    });

    test('given a list of penseeData, when the user search one by unexisted date, then he obtains a specific message error', () => {
        //Set up
        const date = new Date("2025-06-25T05:11:37.962Z");
        
        //Action
        function getPenseeByDate_NOT_FOUND() {
            getPenseeBydate(date);
        }

        //Check
        expect(getPenseeByDate_NOT_FOUND).toThrow(new Error("The 'pensée' with this date 2025-06-25 is unfound"));

    });

});