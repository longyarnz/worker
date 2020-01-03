const worker = new Worker('worker.js');

worker.onmessage = e => {
  switch (e.data.type) {
    case 'RESULT':
      document.querySelector('span').textContent = e.data.text;
      break;
  
    default:
      break;
  }
}

const form = document.querySelector('form');
form.onsubmit = e => {
  e.preventDefault();
  let [ first, operation, last ] = e.target;
  first = parseInt(first.value);
  last = parseInt(last.value);
  operation = operation.value;
  emit({ type: operation, inputs: [first, last] });
}

function emit(data) {
  worker.postMessage(data);
}