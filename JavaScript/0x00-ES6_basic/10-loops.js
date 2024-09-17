export default function appendToEachArrayValue(array, appendString) {
  const modifiedArrag = [];
  for (const idx of array) {
    modifiedArrag.push(appendString + idx);
  }
  return modifiedArrag;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
