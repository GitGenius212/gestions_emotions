import PenseeData from "../Classes/PenseeData";


type PenseeProps = {
  pensee? : PenseeData, 
  getPensee? : (penseeFoundByDate: PenseeData, penseesFoundByDate: PenseeData[]) => void;
  elementsProps? : any;
  listPenseesSameDate? : Array<PenseeData>;
  index?: number;
}

export default PenseeProps;