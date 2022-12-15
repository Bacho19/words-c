import { Error } from "../generated/graphql";

export const refactorErrors = (errors: Error[]): Record<string, string> => {
  const result: Record<string, string> = {};

  errors.forEach((error) => {
    result[error.field] = error.message;
  });

  return result;
};
