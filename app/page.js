import Post from './components/post';
import Postreaction from './components/postreaction';
import Notifications from './components/notifications';
import { Suspense } from 'react';
export default function Home() {
  return (
    <>
      <Notifications />
      <Suspense fallback={<p>Loading post...</p>}>
        <Post>
          <Postreaction />
        </Post>
      </Suspense>
    </>
  );
}
