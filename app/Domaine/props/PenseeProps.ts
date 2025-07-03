import PenseeData from "../Classes/PenseeData";


type PenseeProps = {
  pensee? : PenseeData, 
  getPensees? : (penseesFoundByDate: PenseeData[]) => void;
  elementsProps? : any;
  listPenseesSameDate? : Array<PenseeData>;
  index?: number;
}

export default PenseeProps;