export const login_form_schema = {
  username: (value: string) =>
    value.length < 2 ? "Name must have at least 2 letters" : null,

  password: (value: string) =>
    value.length < 2 ? "Name must have at least 2 letters" : null,
};
