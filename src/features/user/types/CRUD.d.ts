type UpdateUserT = {
  image?: string | undefined;
  banner?: string | undefined;
  username?: string | undefined;
  firstname?: string | undefined;
  lastname?: string | undefined;
  education?:
    | {
        school?: string | undefined;
        year?: any;
      }
    | undefined;
  bio?: string | undefined;
  work?: {} | undefined;
};

export { UpdateUserT };
