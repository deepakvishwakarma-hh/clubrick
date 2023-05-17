type UpdateUserT = {
  image?: string | undefined;
  banner?: string | undefined;
  username?: string | undefined;
  firstname?: string | undefined;
  lastname?: string | undefined;
  otp_verification_state?:boolean
};

export { UpdateUserT };
