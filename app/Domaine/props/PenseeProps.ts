import { PenseeData } from "../Classes/PenseeData";

export type PenseeProps = {
  pensee? : PenseeData, 
  getPensee? : (penseeFoundByDate: PenseeData) => void;
  selectedEmotions? : any;
}