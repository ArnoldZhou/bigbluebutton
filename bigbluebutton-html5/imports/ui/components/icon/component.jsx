import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  iconName: PropTypes.string.isRequired,
  prependIconName: PropTypes.string,
};

const defaultProps = {
  prependIconName: 'icon-bbb-',
};

export default class Icon extends Component {
  render() {
    const { className, prependIconName, iconName, ...otherProps } = this.props;

    // ToastContainer from react-toastify passes a useless closeToast prop here
    delete otherProps.closeToast;

    return (
      <i
        className={cx(className, [prependIconName, iconName].join(''))}
        {...otherProps}
      />
    );
  }
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
