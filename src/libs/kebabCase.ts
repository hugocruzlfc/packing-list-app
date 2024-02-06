export const toKebabCase = (s: string): string => {
  return s.toLowerCase().replace(/\s/g, '-');
};

// const textoOriginal = "Convertir a Kebab Case";
// const kebabCase = toKebabCase(textoOriginal);
// console.log(kebabCase); // Output: "convertir-a-kebab-case"
