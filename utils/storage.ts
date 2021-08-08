/**
 * @param {string} key
 * @returns {T}
 */
export const getItem = <T>(key: string): T => {
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
};

/**
 * @param {string} key
 * @param {T} value
 * @returns {void}
 */
export const setItem = <T>(key: string, value: T) => {
  if (!value) return;
  localStorage.setItem(key, JSON.stringify(value));
};
