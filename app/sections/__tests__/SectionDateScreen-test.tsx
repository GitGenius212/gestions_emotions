import { render } from '@testing-library/react-native';

import SectionDate, { CustomText } from '@/app/sections/sectionDate';

describe('<SectionDate />', () => {
  test('Text renders correctly on SectionDate', () => {
    const { getByText } = render(<SectionDate />);

    getByText("Aujourd'hui");
  });
});
