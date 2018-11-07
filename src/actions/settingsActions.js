import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from './types';

export const setDisableBalanceOnAdd = () => {
  //GET settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  // Set bask to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  //GET settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  // Set bask to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};
export const setAllowRegistration = () => {
  //GET settings from localStorage
  const settings = JSON.parse(localStorage.getItem('settings'));

  //Toggle
  settings.allowRegistration = !settings.allowRegistration;

  // Set bask to localStorage
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
