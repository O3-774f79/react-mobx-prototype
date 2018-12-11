import { observable, action } from 'mobx';

class Login {
    @observable inProgress = false;
    @observable errors = undefined;
    @observable userLogin = {
        email: 'test',
        password: '',
      };
    @action setEmail(email) {
         this.userLogin.email = email
    }
    @action setPassword(password) {
         this.userLogin.password = password
    }
    @action login(){
        this.inProgress = true;
        this.errors = undefined;
         console.log("test",this.userLogin)
    }
    @action setValue(){ 
         this.userLogin.email = ''
         this.userLogin.password = '' 
    }
}
export default new Login()
