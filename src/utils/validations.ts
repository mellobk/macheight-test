export const regexOnlyComaNumbers = (data: string) => {
  const regex = /^[0-9,-]+$/;
  if (regex.test(data)) {
    return data;
  }
};

export const regexOnlyNumbers = (data: string) => {
  const regex = /^[0-9]+$/;
  if (regex.test(data)) {
    return data;
  }
};
