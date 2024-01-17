import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPostsThunk } from '../../store/slices/postsSlice';

function PostsList ({ posts, isFeatching, error, getPosts }) {
  useEffect(() => {
    getPosts();
  }, []);
  const mapPosts = p => (
    <li key={p.id}>
      <h3>{p.title}</h3>
      <span>{p.userId}</span>
      <p>{p.body}</p>
      <button>delete</button>
    </li>
  );
  return (
    <>
      {isFeatching && <div>Loading...</div>}
      {error && <div>ERROR!!!</div>}
      {!isFeatching && !error && <ul>{posts.map(mapPosts)}</ul>}
    </>
  );
}

const mapStateToProps = ({ postsList }) => postsList;

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
