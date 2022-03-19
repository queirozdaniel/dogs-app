import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';

const PhotoCommentForm = ({ id }) => {
  const [comment, setComment] = React.useState('');

  console.log('rwas');
  return (
    <form>
      <textarea
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
