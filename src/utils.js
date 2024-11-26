const removeMiddleSpaces = (str) => {
  return str.replace(/\s+/g, "").toLowerCase().trim();
};

export default removeMiddleSpaces;