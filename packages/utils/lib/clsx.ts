type V = string | boolean | null | undefined;

export const clsx = (...args: V[]): string =>
  args
    .flat()
    .filter((a: any): a is string => typeof a === "string")
    .map((a: string) => a.trim())
    .filter((a: string) => a !== "")
    .join(" ");
