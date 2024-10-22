import { createUser } from "./utils"
import { uploadPhoto } from "./utils"

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    /** The results const assigns the returns of createUser and uploadPhoto
     * by the order asked to be received in below. Making the data avalibale in both accessible
     * in the console.log.
     */
    .then(results => {
      const [user, photo] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(error => {
      console.error("Signup system offline");
    });
}
