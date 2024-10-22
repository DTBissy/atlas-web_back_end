export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) Promise.resolve({ status: 200, body: 'success' }, console.log('Got Response'));
    else reject(Error('Hm like this')).then(resolve, reject);
  });
}
