import { patchFollowersUser } from 'services/api';

export default function handlerFollowers(el, id) {
  if (id !== el.id) return el;
  const newFollowers = el.isFollow ? --el.followers : ++el.followers;
  patchFollowersUser(el.id, newFollowers);
  return { ...el, isFollow: !el.isFollow };
}
