import { Service } from 'typedi';

@Service()
class API {
  constructor() { }
  
  getData () {
    return 'data'
  }
}

export default API;