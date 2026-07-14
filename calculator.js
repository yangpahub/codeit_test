function add(a, b)
{
 return a+b;
}

function substract(a, b)
{
  return a-b;
}
const devide = (a, b) => {
  if (b == 0) {
    throw new Error();
  }
  return a / b;
};
