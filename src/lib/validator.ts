export function isRequired(value: any) {
  if (value == null || value == undefined || (value?.length ?? 0) <= 0) {
    return false;
  }

  return true;
}

export function isID(value: any, minLength = 8, maxLength = 16) {
  if (!value?.length) return false;

  const pattern = new RegExp(`^[a-z][a-z0-9]{${minLength - 1},${maxLength - 1}}$`);

  if (!pattern.test(value)) {
    return false;
  }

  return true;
}

export function isPassword(value: any, minLength = 8, maxLength = 16) {
  if (!value?.length) return false;

  const pattern = new RegExp(`^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$~!@$!%*#^?&\\(\\)\-_=+]).{${minLength},${maxLength}}$`);

  if (!pattern.test(value)) {
    return false;
  }
  return true;
}

export function isEmail(value: any) {
  if (!value?.length) return false;

  const pattern = new RegExp(`^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$`);

  if (!pattern.test(value)) {
    return false;
  }

  return true;
}

export function isPhoneNumber(value: any) {
  if (!value?.length) return false;

  const pattern = new RegExp(/^[0-9\b -]{0,13}$/);

  if (!pattern.test(value)) {
    return false;
  }

  return true;
}

export function notMinLength(value: any, minLength = 2) {
  if (!value?.length) return false;

  if (value.length < minLength) {
    return false;
  }

  return true;
}

export function notMaxLength(value: any, maxLength = 10) {
  if (!value?.length) return false;

  if ((value?.length ?? 0) > maxLength) {
    return false;
  }

  return true;
}

export function isInt(value: any) {
  if (!value?.length) return false;

  if (!Number.isInteger(value)) {
    return false;
  }

  return true;
}

export function isNumber(value: any) {
  if (!value?.length) return false;

  if (isNaN(value)) {
    return false;
  }

  return true;
}

export function notMin(value: any, min = 0) {
  if (!value?.length) return false;

  if (value < min) {
    return false;
  }

  return true;
}

export function notMax(value: any, max = 10) {
  if (!value?.length) return false;

  if (value > max) {
    return false;
  }

  return true;
}
