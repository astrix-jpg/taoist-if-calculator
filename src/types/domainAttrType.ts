type AttributeFactor = {
  attr: string;   // You can restrict to specific strings like "M" | "C" | "I" | "S" if needed
  factor: number;
};

export type DomainData = {
  domain: string;         // You can also restrict this if there are fixed domains
  data: AttributeFactor[];
};