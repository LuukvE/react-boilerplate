import PlusIcon from '@fortawesome/fontawesome-free/svgs/solid/plus.svg';
import { useCallback, useMemo } from 'react';

import Button from '@/components/Button';
import useStore from '@/hooks/useStore';

export default function Users() {
  const { users, add } = useStore();
  const list = useMemo(() => Object.values(users), [users]);

  const addUser = useCallback(() => {
    const id = crypto.randomUUID();

    add('users', id, { id, name: 'Dummy User' });
  }, [add]);

  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col p-8">
      <div className="flex items-center">
        <h1 className="grow text-2xl font-bold">Users</h1>
        <Button onClick={addUser} className="flex items-center">
          <PlusIcon className="mr-2 w-4 fill-[#222] dark:fill-white" /> Create User
        </Button>
      </div>
      {!!list.length && (
        <div className="mt-4 flex w-full flex-col leading-loose">
          <div className="mb-1 flex gap-2 font-semibold">
            <div className="grow basis-0 border-b">ID</div>
            <div className="grow basis-0 border-b">Name</div>
          </div>
          {list.map((user) => (
            <div className="flex gap-2" key={user.id}>
              <div className="grow basis-0">{user.id}</div>
              <div className="grow basis-0">{user.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
