import { createUser, uploadPhoto } from "./util"

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((results) => {
      let body = results.body;
      createUser()
        .then((results) => {
          let firstName = results.firstName;
          let lastName = results.lastName;
          console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
}
