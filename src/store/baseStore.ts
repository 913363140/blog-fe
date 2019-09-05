import { action, observable } from 'mobx'
import { DataStatus } from '../type/enum'

abstract class BaseRequestStore {
  @observable
  public status: DataStatus = DataStatus.NOT_LOADED
  @observable
  public errorMessage: string = ''

  @action
  protected setStatus(x: DataStatus) {
    this.status = x
  }

  @action
  protected setErrorMessage(x: string) { 
    this.errorMessage = x
  }

  @action
  protected onResponseError(err: any) {
    this.setStatus(DataStatus.ERROR)
    if (typeof err === 'string') {
      this.setErrorMessage(err)
      return
    }
    if (!err.response || !err.response.data) {
      this.setErrorMessage('网络错误')
      return
    }
    if (err.response.data.err_tips) {
      this.setErrorMessage(err.response.data.err_tips)
    }
  }
}

export default BaseRequestStore