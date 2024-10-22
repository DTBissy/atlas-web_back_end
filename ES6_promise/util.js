
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'this-is-a-different-photo',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
