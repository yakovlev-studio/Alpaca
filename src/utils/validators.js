import {parsePhoneNumberFromString} from 'libphonenumber-js/mobile';
import _ from 'lodash';

/**
 * @param  {string} value user's email
 * @return {string || null} error
 */
function validateEmail(email) {
  if (!email) {
    return 'Укажите почтовый адрес';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Некорректный почтовый адрес';
  }
  return null;
}

/**
 * @param  {string} password user's password
 * @return {string || null} error
 */
function validatePassword(password) {
  if (!password) {
    return 'Укажите пароль';
  } else if (password.length < 4) {
    return 'Слишком короткий пароль';
  }
  return null;
}

/**
 * @param  {string} confirmPassword user's password to confirm
 * @param  {string} password user's password types previously
 * @return {string || null} error
 */
function validateConfirmPassword(confirmPassword, password) {
  if (!confirmPassword) {
    return 'Повторно введите пароль';
  } else if (!_.isEqual(password, confirmPassword)) {
    return 'Пароли не совпадают';
  }
  return null;
}

/**
 * @param  {string} userName user's name
 * @return {string || null} error
 */
function validateName(userName) {
  if (!userName) {
    return 'Введите имя';
  }
  return null;
}

/**
 * @param  {string} userLastName user's last name
 * @return {string || null} error
 */
function validateLastName(userLastName) {
  if (!userLastName) {
    return 'Введите фамилию';
  }
  return null;
}

/**
 * @param  {string} phoneNumber  user's phoneNumber
 * @return {string || null} error
 */
function validatePhoneNumber(phoneNumber) {
  if (!phoneNumber) {
    return 'Введите номер телефона';
  } else if (parsePhoneNumberFromString(phoneNumber, 'RU')) {
    if (!parsePhoneNumberFromString(phoneNumber, 'RU').isValid()) {
      return 'Некорректный номер телефона';
    }
  }
  return null;
}

/**
 * @param  {string} position  user's position
 * @return {string || null} error
 */
function validatePosition(position) {
  if (!position) {
    return 'Введите Вашу должность';
  }
  return null;
}

/**
 * @param  {string} position  user's position
 * @return {string || null} error
 */
function validateCompanyName(companyName) {
  if (!companyName) {
    return 'Введите наименование компании';
  }
  return null;
}

function validateFormInputs(values) {
  const fieldKeys = Object.keys(values);
  const errors = {};
  let error = null;
  for (let key of fieldKeys) {
    switch (key) {
      case 'email':
        error = validateEmail(values.email);
        if (error) errors.email = error;
        break;
      case 'password':
        error = validatePassword(values.password);
        if (error) errors.password = error;
        break;
      case 'confirmPassword':
        error = validateConfirmPassword(
          values.confirmPassword,
          values.password,
        );
        if (error) errors.confirmPassword = error;
        break;
      case 'name':
        error = validateName(values.name);
        if (error) errors.name = error;
        break;
      case 'lastName':
        error = validateLastName(values.lastName);
        if (error) errors.lastName = error;
        break;
      case 'phoneNumber':
        error = validatePhoneNumber(values.phoneNumber);
        if (error) errors.phoneNumber = error;
        break;
      case 'companyName':
        error = validateCompanyName(values.companyName);
        if (error) errors.companyName = error;
        break;
      case 'position':
        error = validatePosition(values.position);
        if (error) errors.position = error;
        break;
      default:
        null;
    }
  }
  return errors;
}

export {validateFormInputs};
