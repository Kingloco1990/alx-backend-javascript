import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let returnValue1;
  let returnValue2;

  try {
    returnValue1 = await uploadPhoto();
  } catch (error) {
    returnValue1 = 'null';
  }

  try {
    returnValue2 = await createUser();
  } catch (error) {
    returnValue2 = 'null';
  }

  if (returnValue1 === 'null' || returnValue2 === 'nul') {
    return {
      photo: returnValue1,
      user: returnValue2,
    };
  } return {
    photo: returnValue1,
    user: returnValue2,
  };
}
