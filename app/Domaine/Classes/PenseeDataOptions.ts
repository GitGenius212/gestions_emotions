type PenseeDataOptions = {
  id?: number;
  element_declencheur?: string;
  interpretation?: string;
  date?: Date;
  emotions_avant?: string[], 
  contre_pensee_negative?: string;
  emotions_apres?: string[], 
}

export default PenseeDataOptions;