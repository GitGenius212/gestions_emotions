import SolutionData  from "../Classes/SolutionData";

type SolutionProps = {
  item: SolutionData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  removeItem : (id:number) => void;
  putItem : (text:string, item: SolutionData, isSelectedSol?: boolean, shouldUpdateDate?:boolean) => void;
  setIsFocused: (p:boolean) => any;
};

export default SolutionProps;