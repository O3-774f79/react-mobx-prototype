import { withRouter, Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';
import InputTextField from '../components/inpunTextFile'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

@inject('authStore','login')
@withRouter
@observer
class Login extends React.Component {

  componentWillUnmount() {
    // this.props.authStore.reset();
    this.props.login.setValue()
  }

  handleEmailChange = e => this.props.authStore.setEmail(e.target.value);
  handlePasswordChange = e => this.props.authStore.setPassword(e.target.value);
  _handleEmailChange = e => this.props.login.setEmail(e.target.value)
  _handlePasswordChange = e => this.props.login.setPassword(e.target.value)
  handleSubmitForm = (e) => {
    e.preventDefault();
    // this.props.authStore.login()
    this.props.login.login()
      // .then(() => this.props.history.replace('/')        ,console.log("history :",this.props.history));
  };
  render() {
        const {userLogin,inProgress, errors} = this.props.login
        const { classes } = this.props;
    return (
      <div>
              <ListErrors errors={errors} />

              {/* <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmitForm}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={userLogin.email}
                      onChange={this._handleEmailChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={userLogin.password}
                      onChange={this._handlePasswordChange}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={inProgress}
                  >
                    Sign in
                  </button>

                </fieldset>
              </form> */}
              <InputTextField />
            </div>
    );
  }
}
export default withStyles(styles)(Login)