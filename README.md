#  wallpaper-app

## 介绍

这是一个全栈开发的壁纸APP，前端使用uniapp开发，后端使用nodeJS Koa2开发，数据存储在MySQL数据库中，接口已经部署在我的服务器，亲测应用可以打包为APP、微信小程序，其他小程序并没有测试。

##  软件架构

前端框架：uniapp

UI组件库：uView  https://uviewui.com/

后端技术栈：NodeJS + Koa2 + MySQL

图床：遇见图床 https://www.hualigs.cn/

##  安装教程

1、NodeJS安装，需要打开终端cd到server根目录下面，执行下面指令

```js
npm install
```

2、uniapp不用安装，需要使用HBuilder X编辑器

3、数据库：新建一个MySQL数据库，打开Navicat工具，导入我提供的SQL文件即可

##  使用说明

1、NodeJS后台启动说明：

执行完上面的`npm install`命令，安装好依赖之后。首先在server文件夹下面的`.env`文件里配置自己的主机、端口号以及MySQL的用户名和密码，配置完成后，打开终端cd到server根目录下，执行命令`npm start`即可成功运行（若数据库没有配置正确，服务也是不能正常运行的）。

2、uniapp启动说明

用HBuilder X打开uniapp文件夹，然后点击“运行”选项，选择自己想要运行的平台即可。

3、关于壁纸资源及上传

3.1、该App中有的壁纸资源使用的是网上的壁纸API，壁纸连接不会保存到数据库中

3.2、壁纸上传：APP提供了上传壁纸的能力，用户可以上传自己喜欢的壁纸到APP中，可以分享给他人以便他人下载。需要注意的是：这个上传壁纸功能，我采用的第三方免费的遇见图床（非常好用）的上传API，将壁纸存放到图床上面，只把上传成功后的壁纸链接保存到自己的数据库中。这样做的目的：1、大量的壁纸不会占用服务器的空间。2、图床提供了CDN资源加速，访问壁纸速度更丝滑。3、该图床一次上传可以备份到多个空间，壁纸不易丢失。（简直完美）

## 项目目录说明

```
|-- server                                    // node后台项目
|   |-- src                                   // 主程序
|   |   |-- app                               // 配置端口、数据库
|   |   |-- constants                         // 定义的一些常量
|   |   |-- controller                        // 控制层
|   |   |-- middleware                        // 中间控制层
|   |   |-- router                            // 配置路由
|   |   |-- service                           // 操作数据库
|   |   |-- utils                             // 工具方法
|   |   |-- main.js                           // 主入口
|   |-- uploads                               // 存放上传的文件  
|   |-- .env                                  //后台配置文件
|   |--package.json
|   |--package-lock.json                      
|-- uniapp                                    // uniapp项目
|   |-- components                            // 公共组件
|   |-- pages                                 // 页面
|   |   |-- classify                          // 分类页面
|   |   |-- demotantan                        // 仿知乎卡片页面
|   |   |-- demozhihu                         // 仿探探卡片页面
|   |   |-- detail                            // 详情页面
|   |   |-- index                             // 首页
|   |   |-- more                              // 更多页面
|   |   |-- my                                // 我的页面
|   |   |-- turnImg                           // 翻一翻页面
|   |   |-- uploadImg                         //上传壁纸页面
|   |-- static                                // 静态资源
|   |-- util                                  // 工具方法
|   |-- uview-ui                              // uView组件
|   |-- App.vue                               // 根页面
|   |-- main.js                               // 入口文件
|   |-- manifest.json                         // 打包发布时的配置文件
|   |-- pages.json                            // 配置页面
|   |-- uni.scss                          
|-- coderhub.sql                              // 数据库文件
```

## 项目截图
![APP启动页面](https://images.gitee.com/uploads/images/2021/0129/164717_bd75b3de_5335319.jpeg =40%* "APP启动页面")



















