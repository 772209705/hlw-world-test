import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';
var request = require('request');

describe('test/controller/home.test.ts', () => {

  it('接口测试返回值 /', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await (await createHttpRequest(app).get('/demo'));
    
    // use expect by jest
    expect(result.text).toBe('//www.baidu.com/img/bd_logo1.png');

    // close app
    await close(app);
  });

  it('接口请求响应时间 ',async()=>{

    request.get({
      url : 'http://127.0.0.1:7001/demo',
      time : true
    },function(err, response){
      // console.log('Request time in ms:', response.elapsedTime);
     expect(response.elapsedTime).toBeLessThan(1000);
    

    });
    

  })

});
