export default function addPropertyInArray(property, array, value) {
  return array.map(el => ({ ...el, [property]: value }));
}
