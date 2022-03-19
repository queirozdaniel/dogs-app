import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentForm from './PhotoCommentForm';

const PhotoComments = ({ id, comments }) => {
  const { login } = React.useContext(UserContext);
  return <div>{login && <PhotoCommentForm id={id} />}</div>;
};

export default PhotoComments;
