import { normalizeSize } from '../src/utils/normalize.utils';
import { PixelRatio } from 'react-native';

jest.mock('react-native', () => ({
    Dimensions: {
      get: jest.fn().mockReturnValue({ width: 390 }),
    },
    PixelRatio: {
      roundToNearestPixel: jest.fn(),
    },
  }));
  
  describe('normalizeSize function', () => {
    it('should normalize size correctly', () => {
      const inputSize = 100;
      normalizeSize(inputSize);
      expect(PixelRatio.roundToNearestPixel).toHaveBeenCalledWith(inputSize);
    });
  

    });
