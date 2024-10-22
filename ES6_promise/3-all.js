import { createUser, uploadPhoto } from "./util"

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    /** The results const assigns the returns of createUser and uploadPhoto
     * by the order asked to be received in below. Making the data avalibale in both accessible
     * in the console.log.
     */
    .then((results) => {
      let body = results.body;
      createUser()
        .then((results) => {
          let firstName = firstName;
          let lastName = lastName;
          console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
}
