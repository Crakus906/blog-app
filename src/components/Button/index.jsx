import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button as ButtonAntd } from 'antd';
import { ButtonWrepper } from './style'

export default function Button(props) {
  const {
    type,
    className,
    children,
    onClick,
    ...otherProps
  } = props;

  return (
    <ButtonWrepper>
        <ButtonAntd
            type={type}
            className={cn('button', className)}
            onClick={onClick}
            { ...otherProps }
        >
          { children }
        </ButtonAntd>
    </ButtonWrepper>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'submit',
  className: null,
  onClick: null,
};