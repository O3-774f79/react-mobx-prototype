import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

// @inject('userStore', 'commonStore')
@inject('userStore')
@observer
export default class PrivateRoute extends React.Component {
  render() {
    const { userStore, ...restProps } = this.props;
    console.log("restprops :",{...restProps})
    console.log("userStore :",userStore)
    if (userStore.currentUser) return <Route {...restProps} />;
    return <Redirect to="/" />;
  }
}
