import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    height: "100vh",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 325,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

@inject('login')
@withRouter
@observer
class InpunTextFile extends React.Component {
  componentWillUnmount() {
    this.props.login.setValue()
  }
  _handleEmailChange = e => { e.preventDefault(); this.props.login.setEmail(e.target.value) }
  _handlePasswordChange = e => {e.preventDefault();this.props.login.setPassword(e.target.value)}
  _handleSubmit = () => {
    this.props.login.login()
      // .then(() => this.props.history.replace('/'),   
      this.props.history.replace('/')
  };
  render() {
    const { classes } = this.props;
    const {userLogin,inProgress} = this.props.login
    return (
      <div className={classes.container}> 
        <div style={{  display: "flex",flexDirection: "column"}}>
        <div style ={{display: "flex", justifyContent:"center"}}>       <h1>Leader Planet</h1></div>
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
            value={userLogin.email}
            onChange={this._handleEmailChange}
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
            value={userLogin.password}
            onChange={this._handlePasswordChange}
            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
          />
            <FormHelperText id="component-error-text">Some important helper text</FormHelperText>
        </FormControl>  
         
        <Button variant="outlined" color="primary" className={classes.button} onClick={this._handleSubmit} disabled={inProgress}>
        เข้าสู่ระบบ
      </Button>
        </div>    
      </div>
    );
  }
}

InpunTextFile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InpunTextFile);
