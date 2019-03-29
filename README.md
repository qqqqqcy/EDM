# EDM（Elephant Design Mobile）

A configurable Mobile UI

## 目录结构

```
├── bak                         此目录与开发无任何关联，可以完全忽略。仅仅用来备份一些开发过程中的配置。
├── config                      用于 webpack 配置的文件
├── component                   用来存放所有组件源码
    ├── [cpName]                    单个组件
        ├── demo                        用以在 example 中展示的 demo 和组件 API 说明
    ├── common                      公用方法，底层组件
        ├── [cpName]                    单个底层组件
    ├── style                       组件样式
    ├── index.ts                    入口文件
├── examples                    组件库的展示页
    ├── document                    组件库的说明文档页
        ├── component                   说明文档页用的组件
        ├── markdown                    纯 markdown 页面
    ├── instance                    移动端的组件展示页
    ├── style                       样式
    ├── until                       公共方法
├── lib                         组件库打包生成
├── typings                     类型文件
```

## 项目特性

- 基于 ts-node 全程使用 Typescript（包括 webpack 配置）
- 开发模式基于 SFC + React Hooks

## 组件开发规范

开发组件过程中所需注意的规范和提示

### Typescript 相关

组件需要继承本身标签的所有属性
