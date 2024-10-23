import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const signUp = await signUpUser(firstName, lastName);

    const upload = await uploadPhoto(fileName);

    return [{ firstName: signUp.firstName, lastName: signUp.lastName }, upload];
  } catch (error) {
    return [];
  }
}

export default handleProfileSignup
