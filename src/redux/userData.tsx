// userData.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import {GameAttempt, UserData} from '../constants/interfaces';
import {detectAppLanguage} from '../functions/language';

export const storage = new MMKV();
export const USER_DATA_KEY = 'userData';

const defaultUserData: Omit<UserData, 'startDate' | 'language'> = {
  theme: 'Olive',
  // language: 'uk',
  wordPack: 'common-uk-100',
  history: [],
  isOnboardingPassed: false,
};

const loadInitialState = (): UserData => {
  const raw = storage.getString(USER_DATA_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as Partial<UserData>;
      return {
        ...defaultUserData,
        ...parsed,
        language: parsed.language ?? detectAppLanguage(),
        startDate: parsed.startDate ?? Date.now(),
      };
    } catch {
      storage.delete(USER_DATA_KEY);
    }
  }
  const fresh: UserData = {
    ...defaultUserData,
    language: detectAppLanguage(),
    startDate: Date.now(),
  };
  storage.set(USER_DATA_KEY, JSON.stringify(fresh));
  return fresh;
};

const initialState = loadInitialState();

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    updateUserData(state, action: PayloadAction<Partial<UserData>>) {
      Object.assign(state, action.payload);
    },
    addHistory(state, action: PayloadAction<GameAttempt>) {
      state.history.push(action.payload);
    },
    resetUserData(state) {
      return {
        ...defaultUserData,
        startDate: Date.now(),
        language: state.language,
      };
    },
  },
});

export const {updateUserData, addHistory, resetUserData} =
  userDataSlice.actions;
export default userDataSlice.reducer;
