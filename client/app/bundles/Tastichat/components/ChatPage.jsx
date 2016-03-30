import React from 'react';
import MessagesListContainer from '../containers/MessagesListContainer';
import WriteMessageContainer from '../containers/WriteMessageContainer';
import classNames from 'classnames';

export default () => {
  return (
    <page>
      <WriteMessageContainer />
      <MessagesListContainer />
    </page>
  );
};
