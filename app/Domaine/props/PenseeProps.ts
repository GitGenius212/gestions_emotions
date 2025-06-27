import { PenseeData } from "../Classes/PenseeData";

export type PenseeProps = {
  pensee : PenseeData, 
  updatePensee : (penseeFoundByDate: PenseeData) => void;
}