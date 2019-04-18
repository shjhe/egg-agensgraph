# egg-agensgraph

MySQL 插件是为 egg 提供 agensGraph 数据库访问的功能

## 安装

```bash
$ npm i egg-agensgraph --save
```

## 配置

通过 `config/plugin.js` 配置启动 agensgraph 插件:

```js
exports.agensgraph = {
  enable: true,
  package: 'egg-agensgraph',
};
```

在 `config/config.${env}.js` 配置各个环境的数据库连接信息：

### 具体配置

```js
exports.agensgraph = {
  // 单数据库信息配置
  client: {
    // host
    host: 'mysql.com',
    // 端口号
    port: '3306',
    // 用户名
    user: 'test_user',
    // 密码
    password: 'test_password',
    // 数据库名
    database: 'test',    
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
```

使用方式：

```js
// 单实例可以直接通过 app.agensgraph 访问
app.agensgraph.query(query, values);
or
app.agensgraph.query(query);
```

## License

[MIT](LICENSE)

[agensgraph-nodejs]: https://github.com/bitnine-oss/agensgraph-nodejs