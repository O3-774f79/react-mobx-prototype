import ListErrors from '../../components/ListErrors'
import React,{PureComponent,Fragment} from 'react';
import InputTextField from './inputLoginForm'
import PaperBG from '../../components/PaperBG'
import { inject, observer } from 'mobx-react';

@inject('login')
@observer
export default class Index extends PureComponent {
  render() {
    const {errors} = this.props.login 
    return (
      <Fragment>
        <PaperBG>
          <ListErrors errors={errors} />
          <InputTextField />
        </PaperBG>
      </Fragment>
    );
  }
}
