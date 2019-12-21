const {
    override,
    fixBabelImports,
    addWebpackAlias
} = require ('customize-cra');
// 引入path
const path = require('path');
//封装函数实现绝对路径
function pathFn(pathurl){
    return path.join(__dirname,pathurl)
}

module.exports = override(
    fixBabelImports('import', { 
        libraryName: 'antd-mobile',
        style: 'css',
      }),
    //   配置路径别名
      addWebpackAlias({
        '@': pathFn('./src'),
       
      })
)