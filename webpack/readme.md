### 初始化项目

新建一个目录，初始化npm
 
 `npm init -y`

webpack是运行在node环境中的,我们需要安装以下两个npm包

`npm i -D webpack webpack-cli`

    - npm i -D 为npm install --save-dev的缩写
    - npm i -S 为npm install --save的缩写

引用css

`npm i -D style-loader css-loader`

如果我们使用less来构建样式，则需要多安装两个

`npm i -D less less-loader`

为css添加浏览器前缀

`npm i -D postcss-loader autoprefixer  `