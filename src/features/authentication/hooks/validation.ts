const validatePassword = (password: string) => {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!password) {
    return "Password is required";
  }
  if (!pattern.test(password)) {
    return "Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number";
  }
  return null;
};
const validateBirthday = (birthday: Date) => {
  if (!birthday) {
    return "Birthday is required";
  }
  const age = new Date().getFullYear() - new Date(birthday).getFullYear();
  if (age < 18) {
    return "You must be at least 18 years old to register";
  }
  return null;
};
export { validateBirthday, validatePassword };
