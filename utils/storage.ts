/**
 * @param {string} key
 * @returns {T | undefined}
 */
export const getItem = <T>(key: string): T | undefined => {
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  return undefined;
};

/**
 * @param {string} key
 * @param {T} value
 * @returns {void | undefined}
 */
export const setItem = <T>(key: string, value: T): void | undefined => {
  if (!value) return undefined;
  localStorage.setItem(key, JSON.stringify(value));
};
