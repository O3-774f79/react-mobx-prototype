import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 325,
  },
});

class InpunTextFile extends React.Component {
  _handleUserChange = e => {
    e.preventDefault();
      this.setState({name: e.target.value})
  }
  _handlePasswordChange = e => {
    e.preventDefault();
    this.setState({password: e.target.value})
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container} style={{display:"flex",justifyContent: "center",
      alignItems: "center"}}>
        <div style={{  display: "flex",flexDirection: "column"}}>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="username-outlined"
          >
            Username
          </InputLabel>
          <OutlinedInput
            id="username-outlined"
            value={this.props.Name}
            onChange={this._handleUserChange}
            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
          />
            <FormHelperText id="component-error-text">Some important helper text</FormHelperText>
        </FormControl>   
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="password-outlined"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="password-outlined"
            value={this.props.password}
            onChange={this._handlePasswordChange}
            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
          />
            <FormHelperText id="component-error-text">Some important helper text</FormHelperText>
        </FormControl>   
        </div>    
      </div>
    );
  }
}

InpunTextFile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InpunTextFile);
