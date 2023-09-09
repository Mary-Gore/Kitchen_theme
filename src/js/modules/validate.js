export const validate = input => {
  // Validate name value
  const validateName = name => {
    const lowerName = name.toLowerCase();
    name = lowerName.replace(/(^[а-яё])/, letter => letter.toUpperCase());
    name = name.replace(/[^а-яё-\s]/gi, '');
    name = name.replace(/(\s(?=\s))/gi, '');
    name = name.replace(/-{2}/g, '-');
    name = name.replace(/(?<=-)[а-яё]/g, letter => letter.toUpperCase());
    name = name.replace(/(?<=\s)[а-яё]/g, letter => letter.toUpperCase());

    return name;
  };

  if (input.name === 'user-name') {
    return validateName(input.value);
  }
};