export const isTruthy = <T>(
  t: T | undefined | null | void | false | number,
): t is T => {
  return !!t;
};
