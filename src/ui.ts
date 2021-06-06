import { Inject, Service } from 'typedi';
import API from './api';

@Service()
class UI {
  
  constructor(
    @Inject('token') public token: string,
    public api: API
  ) { }

  render() {
    return {
      token: this.token,
      display: this.api.getData()
    };

  }
}

export default UI;