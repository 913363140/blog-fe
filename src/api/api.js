import Server from './server'

/**
 *  用途：获取目录
 *  @url 
 *  返回status为1表示成功
 *  @method post
 *  @return {promise}
 */
class API extends Server {
  async getDirectory(params = {}) {
    try {
      let result = await this.axios('get', 'home/directory', { params })
      console.log('GET home/directory ', result)
      if (result && result.code === 0) {
        return result
      } else {
        let err = {
          data: params,
          response: result,
          tips: '获取博客目录失败',
          url: 'home/directory',
        }
        throw err
      }
    } catch (err) {
      console.log(err)
    }
  }

  async getArticle(params = {}) {
    try {
      let result = await this.axios('get', 'article/article', { params })
      console.log('GET article/article ', result)
      if (result && result.code === 0) {
        return result
      } else {
        let err = {
          data: params,
          response: result,
          tips: '获取文章详情失败',
          url: 'article/article',
        }
        throw err
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export default new API()