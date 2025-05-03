import {Platform, NativeModules} from 'react-native';
import {Language} from '../constants/interfaces';

export function getDeviceLocale(): string {
  let locale: string;

  if (Platform.OS === 'ios') {
    // iOS: try AppleLocale, fall back to the first entry in AppleLanguages
    const settings = NativeModules.SettingsManager.settings;
    locale =
      settings.AppleLocale ||
      (settings.AppleLanguages && settings.AppleLanguages[0]) ||
      'en_US';
  } else {
    // Android
    locale = NativeModules.I18nManager.localeIdentifier || 'en_US';
  }

  return locale;
}

export function detectAppLanguage(): Language {
  const raw = getDeviceLocale().replace('-', '_'); // normalize
  const code = raw.split('_')[0]; // e.g. "uk", "ru", "en" ...
  return code === 'uk' || code === 'ru' ? 'uk' : 'en';
}
