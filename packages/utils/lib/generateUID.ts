let current = 0;

export const generateUID = (prefix?: string) => `${prefix || "uid"}_${current++}`;
