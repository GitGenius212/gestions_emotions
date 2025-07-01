import PenseeData from "../Classes/PenseeData";


type PenseeProps = {
  pensee? : PenseeData, 
  getPensee? : (penseeFoundByDate: PenseeData) => void;
  elementsProps? : any;
}

export default PenseeProps;