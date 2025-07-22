import { render } from '@testing-library/react-native';

import SectionDate from '@/app/sections/sectionDate';
import PenseeData from '@/app/Domaine/Classes/PenseeData';

describe('<SectionDate />', () => {
  test('Text renders correctly on SectionDate', () => {
    const { getByText } = render(<SectionDate pensee={{
      id: 0,
      element_declencheur: '',
      interpretation: '',
      date: new Date(),
      emotions_avant: [],
      contre_pensee_negative: '',
      emotions_apres: []
    }} getPensees={function (penseesFoundByDate: PenseeData[]): void {
      throw new Error('Function not implemented.');
      
    } } />);

    getByText("Aujourd'hui");
  });
});
