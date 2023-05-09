import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const x = uploadPhoto();
  const y = createUser();

  return Promise.all([x, y])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })

    .catch(() => {
      console.log('Signup system offline');
    });
}
