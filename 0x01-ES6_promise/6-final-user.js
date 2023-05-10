import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const newArray = [];

  try {
    const user = await signUpUser(firstName, lastName);
    newArray.push({ status: 'fulfilled', value: user });
  } catch (error) {
    newArray.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    newArray.push({ status: 'fulfilled', value: upload });
  } catch (error) {
    newArray.push({
      status: 'rejected',
      value: error.toString(),
    });
  }

  return newArray;
}
