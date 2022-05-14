import { Controller, Get } from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/demo')
  async home(){
    var http = require('http');
    const cheerio =require("cheerio")
    var url = "http://www.baidu.com/";
    var getsrcAer='//www.baidu.com/img/bd_logo1.png';
    var html = '';

  
    // 参数url 和 回调函数
   http.get(url, function (res) {
        // 绑定data事件 回调函数 累加html片段
        res.on('data', function (data) {
            html += data;
        });
       
        res.on('end', function () {
                const $ = cheerio.load(html)
                // console.log('整个页面',html);
                $('#lg #s_lg_img').each((index,el)=>{
                  
                    let srcAer = $(el).attr("src");
                    getsrcAer = srcAer;
                    // console.log('src图片:',srcAer);
                })
        });
        
    });
    
    return getsrcAer;
}
}
