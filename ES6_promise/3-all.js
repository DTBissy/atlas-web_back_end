import { createUser, uploadPhoto } from "./util"

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((results) => {
      let photo = results.body
      createUser()
        .then((results) => {
          let firstName = results.firstName;
          let lastName = results.lastName;
          console.log(`${photo} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
}
