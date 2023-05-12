export default function guardrail(mathFunction) {
  const queue = [];
  let returnValue;

  try {
    returnValue = mathFunction();
  } catch (error) {
    returnValue = error.toString();
  }

  queue.push(returnValue);
  queue.push('Guardrail was processed');

  return queue;
}
