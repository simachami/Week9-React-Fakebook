import { useContext, useEffect, useState } from 'react';
import Post from '../component/Post';
import { UserContext } from '../contexts/UserProvider';
import Spinner from 'react-bootstrap/esm/Spinner';

const baseApiUrl = import.meta.env.VITE_APP_BASE_API;

export default function Posts({username}: {username: string}) {
  const [posts, setPosts] = useState<Array<Postable>>([]);
  const { user } = useContext(UserContext);
  console.log(user)

  useEffect(() => {
    (async () => {
      const res = await fetch(`${baseApiUrl}/user-posts/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setPosts(data.posts);
      } else window.alert('Failed Call')
    })();
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <>
        {posts.length !== 0 ?
          posts.map((post: Postable, i: number) => {
            return <Post post={post} key={i} />;
          }):
          <Spinner animation="border" variant="info" />
        }
      </>
    </>
  );
}
