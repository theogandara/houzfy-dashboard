export const formatPhone = (phone: string) => {
  const phoneFormatted = phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

  return phoneFormatted;
};
