export default function Post({ post }: { post: Postable }) {
  return (
    <p>
      {post.body} {post.timestamp.toLocaleString()}
    </p>
  );
}
