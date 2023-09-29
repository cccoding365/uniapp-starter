# uni-app Starter

## 项目说明

这是一个 uni-app 项目结构框架，使用 uni-app + Vue3 + TypeScript 进行开发的项目可采用该结构进行开发，主要适配 H5、Android、iOS、微信小程序等。

## 开发工具
- **Windows 10 专业版：** 开发平台
- **HBuilder X 3.8.12：** 代码编写，真机调试，多平台打包
- **微信开发者工具：** 微信小程序端调试
- **VS Code：** 代码分支处理（分支合并、冲突处理等）

## 技术栈

- **前端框架：**[uni-app](https://uniapp.dcloud.net.cn/) （Vue3 + TS）
- **状态管理：**[pinia](https://pinia.vuejs.org/zh/)
- **组件库：**[uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

## 工程结构

```
└─src
    ├─apis          #请求接口
    ├─common        #公共文件
    ├─components    #全局组件
    ├─hooks         #组合式函数
    ├─pages         #主包页面
    ├─static        #静态资源
    ├─stores        #Pinia全局状态
    ├─styles        #全局样式
    ├─subPackages   #分包目录
    ├─types         #类型声明文件
    ├─uni_modules   #uni-ui组件库
    └─utils         #全局工具方法
```