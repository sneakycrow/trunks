import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextArea = (props) => (
  <div className="control">
    <textarea className={classNames('textarea', props.className)} placeholder={props.placeholder} />
  </div>
);

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
}

TextArea.defaultProps = {
  className: '',
  placeholder: '',
}

export default TextArea;