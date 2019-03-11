
# 介绍
forked from Cathy0807/react
在此工程的基础上做了一些优化。

## adding chages：
* use React.component to replace obsoleted api React.CreateClass
* use Restful api to replace jsonp api, introducing axios
* use React-Router to turn it to Multipage project
* use Redux to manage the data form restful api
* use React-Redux to manage the data form restful api
* transfer restul request to action using redux-thunk
* beautify navigation tab bar!
* write a middleware for the similar logic of get data.
* add prop-type check for component robust.
* add react-intl for internationalization.

![avatar](./demo.png)

# React-Demo
### 基于Reactjs && Node 通讯的简单演示

* Reactjs && ES6 && webpack构建移动端京东首页
* 基于文件系统的Node.js服务端

## 安装与运行程序

克隆项目

```
> $ git clone https://github.com/CanFoo/react.git
```

分别进入react目录和server目录下安装依赖包

```
> $ npm install
```

在server目录下启动后台服务

```
> $ npm run start
```

在react目录下启动webpack服务

```
> $ npm run dev
```

发布项目文件命令

```
> $ npm run build
```

执行完`npm run dev`命令后，打开浏览器 `http://localhost:8080/`运行项目
