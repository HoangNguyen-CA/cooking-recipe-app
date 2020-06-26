export const checkValidity = (value, rules) => {
  if (!rules) return true;
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    isValid =
      /(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/.test(
        value
      ) && isValid;
  }
  return isValid;
};

export const checkSubmitValidity = (controls) => {
  for (let key in controls) {
    if (!controls[key].valid) return false;
  }
  return true;
};
