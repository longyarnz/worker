onmessage = e => {
  switch (e.data.type) {
    case 'ADD':
      post({type: 'RESULT', text: add(...e.data.inputs)});
      break;
    case 'MINUS':
      post({type: 'RESULT', text: minus(...e.data.inputs)});
      break;
    case 'PRODUCT':
      post({type: 'RESULT', text: product(...e.data.inputs)});
      break;
    case 'BY':
      post({type: 'RESULT', text: by(...e.data.inputs)});
      break;
    default:
      break;
  }
}

function post(data) {
  postMessage(data);
}

function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

function product(x, y) {
  return x * y;
}

function by(x, y) {
  return x / y;
}