/**
* Extract items from list of items, spearated by comma
*/
function splitByComma(string) {
  try {
    const elementArray = tagString.split(",");
    return elementArray;
  } catch(err) {
    return "No Items, or Undefined";
  }
}

/**
* Split blocks of text by a double new line segment
*/
function splitOnDoubleNewline(string) {
  try {
    return string.split(/\n\n/g);
  } catch(err) {
    return `Error splitting on double newline; Input Type: ${typeof string}`;
  }
}


