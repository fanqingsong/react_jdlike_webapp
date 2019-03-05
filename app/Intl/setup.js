// list of available languages
export const enabledLanguages = [
  'en',
];

// this object will have language-specific data added to it which will be placed in the state when that language is active
// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
export const localizationData = {};

import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import enData from './localizationData/en';
addLocaleData(en);
localizationData.en = enData;
