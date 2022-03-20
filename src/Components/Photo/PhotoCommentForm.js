import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';

const PhotoCommentForm = ({ id }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    request(url, options);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentForm;
