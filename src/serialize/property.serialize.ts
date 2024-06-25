export const serializePurpose = (purpose: "sale" | "rent") => {
  switch (purpose) {
    case "sale":
      return "Venda";
    case "rent":
      return "Aluguel";
    default:
      return "";
  }
};
