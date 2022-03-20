import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentForm from './PhotoCommentForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  return (
    <>
      <ul style={styles.comment}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentForm id={props.id} />}
    </>
  );
};

export default PhotoComments;
