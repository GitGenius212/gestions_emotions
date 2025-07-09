import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../DataSolutionDataBD';

describe('getData', () => {
  
  test('should call AsyncStorage.getItem with "my-key"', async () => {
    await getData();
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('my-key');
  });
});