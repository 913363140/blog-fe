import { action, computed, observable } from 'mobx'
import BaseRequestStore from './baseStore'

class HomeStore extends BaseRequestStore {
  @observable
  public a = 1
  
  @observable
  // tslint:disable-next-line: variable-name
  private _b = 1

  @computed
  public get b(): number {
    return this._b
  }

  @action
  public setB(b: number) {
    this._b = b
  }

  @action
  public getApi() {
    // tslint:disable-next-line: no-console
    console.log('接口请求')
  }
}

const getHomeStore = new HomeStore()

// 对外抛出一个单例，便于数据一致
export default getHomeStore