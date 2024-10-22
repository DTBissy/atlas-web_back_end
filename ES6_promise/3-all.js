import { createUser } from "./util"
import { uploadPhoto } from "./util"

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(() => console.log('body firstname lastName'))
    .catch(new Error('Signup system offline'));
}
