import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');

const UI_DEVICE_SCREEN_WIDTH = 390;

const SCALE = width / UI_DEVICE_SCREEN_WIDTH;

/**
 * Normalizes the size based on the device screen width.
 * @param size - The size to normalize.
 * @returns The normalized size.
 */
export const normalizeSize = (size: number): number => PixelRatio.roundToNearestPixel(SCALE * size);