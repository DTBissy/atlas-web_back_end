import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(filename)

  return Promise.resolve([signUp, upload])
    .then(([user, photo]) => {
      return ({ firstName: user.firstName, lastName: user.lastName }, photo)
    })
    .catch(Error([]))
};
