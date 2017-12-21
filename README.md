# Webpack
## 链接
1. [基于webpack的前端工程化开发解决方案探索](https://github.com/xiaoyunchen/webpack)
1. [Webpack 中文指南](http://zhaoda.net/webpack-handbook/)
1. [webpack优秀中文文章](https://github.com/webpack-china/awesome-webpack-cn)

## 记录
```javascritp
webpack如何处理好css文件里的资源引用路径问题

// 图片资源的处理方式
{
    test: /\.(jpg|png)$/,
    loaders: 'url-loader?limit=8192&name=image/[name].[ext]'

    // url-loader带两个参数配置， limit： 小于limit的使用base64编译图片，直接打包到bundle文件中， 大于limit的图片资源存放在输出目录的image文件夹内， 图片名称格式都是动态继承
}

// font 字体图标资源的处理方式
1、第一种方式，是通过url-loader直接将font文件全部构建到bundle文件中， css对font的依赖是同级的相对路径"./"
   弊端：(1)会使得构建文件臃肿 (2)线上无法使用cdn缓存
{
    // 阿里图标
    test: /\.(eot|svg|ttf|woff|woff2)\w*/,
    loader: 'url-loader?limit=1000000'
}

2、第二种方式，通过file-loader在构建时候生成文件输出目录，在部署的时候字体样式就会依赖在构建时指定目录下的字体文件
{
    test: /\.(eot|svg|ttf|woff|woff2)\w*/,
    loader: 'file-loader?publicPath=/static/res/&outputPath=font/'
}
// publicPath属性去掉也可用
```
