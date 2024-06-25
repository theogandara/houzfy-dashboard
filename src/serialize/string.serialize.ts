export const serializeString = (value: string, length = 50) => {
  if (value.length >= length) {
    return `${value.slice(0, length)}...`;
  }

  return value;
};
