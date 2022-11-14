# 开发小技巧（踩过的坑）

## element-UI 表单自定义 label

> 可以使用插槽的方式自定义 label，便于做判断、循环以及文本中代入 html 标签

```html
<el-form-item>
  <span slot="label" v-html="item.number + '.' + item.title"></span>
</el-form-item>
```

## vue 样式打包后移动端和 PC 端样式冲突

> 通过修改配置文件的方式修改项目打包方式

```js
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
  },
  outputDir: 'dist', // 构建时的输出目录
  assetsDir: 'static', // 放置静态资源的目录
  //使用路径   Uncaught SyntaxError: Unexpected token ‘＜‘ 的解决方法
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
});
```
