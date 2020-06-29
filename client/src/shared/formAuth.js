export const checkValidity = (value, rules, name = '') => {
  if (!rules) return true;
  let isValid = true;
  let msg = null;

  const finish = () => {
    return { valid: isValid, msg };
  };

  if (rules.required) {
    if (value.trim() == '') {
      msg = `${name} is required`;
      isValid = false;
      finish();
    }
  }
  if (rules.minLength) {
    if (value.length < rules.minLength) {
      msg = `${name} is too short, minimum ${rules.minLength} characters required`;
      isValid = false;
      finish();
    }
  }
  if (rules.maxLength) {
    if (value.length > rules.maxLength) {
      msg = `${name} is too long, maximum ${rules.maxLength} characters required`;
      isValid = false;
      finish();
    }
  }

  if (rules.isEmail) {
    if (
      !/(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/.test(
        value
      )
    ) {
      msg = `email is invalid`;
      isValid = false;
      finish();
    }
  }
  return { valid: isValid, msg };
};

export const checkSubmitValidity = (controls) => {
  for (let key in controls) {
    if (!controls[key].valid) return false;
  }
  return true;
};
