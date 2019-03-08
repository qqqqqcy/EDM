# elephant-design-mobile

A configurable Mobile UI

## 目录结构

```
├── build                       这个目录主要用来存放构建相关的文件
├── component                   用来存放所有组件源码
    ├── [cmpName]                    单个组件目录
    ├── common                       公用方法
    ├── index.ts                     入口文件
├── config                      用于 webpack 配置的文件
├── examples                    组件库的展示 demo 和 文档 的所有相关文件
    ├── components                  demo 中可以复用的模块放在这里面
    ├── pages                       路由中所有的页面
├── test                        这个目录用来存放测试案例（继续延用初始化出来的目录）
├── typings                     公用类型
├── lib                         组件库打包出来后的目录
```

## 项目特性

- 基于 ts-node 全程使用 Typescript（包括 webpack 配置）
- 开发模式基于 SFC + React Hooks

## 组件开发规范

开发组件过程中所需注意的规范和提示

### Typescript 相关

- 所有可选参数必须设置默认值
- 所以必传参数不可设置默认值
