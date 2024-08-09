import { User } from './User';

const user = new User();

user.sync.getUser("947f")
.then((res) => {
  user.attributes.set(res.data);
}).catch((err) => {
  throw new Error(err);
});

console.log(user)
