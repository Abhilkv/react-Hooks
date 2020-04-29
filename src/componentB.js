import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Colors from '../../theme/default';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },

  cssLabel: {
    color: Colors.headerColor
  },

  inputStyle: {
    color: Colors.inputTextColor
  },

  cssFocused: {
    color: Colors.headerColor
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: Colors.headerColor
  }

});

function ValidField(props) {
  const { classes, label } = props;

  return (
    <form className={classes.container} autoComplete="off">
      <TextField
        id="standard-name"
        label={label}
        className={classes.textField}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.inputStyle,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
      />
    </form>
  );
}

ValidField.propTypes = {
  classes: PropTypes.any.isRequired
};

export default withStyles(styles)(ValidField);
