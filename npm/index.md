# npm

## 更新版本

### 发布一个新的稳定版本

```sh
npm version patch
npm publish
```

### 预发布版本

```sh
# 发布一个 prelease 版本，tag=beta
npm version prerelease
npm publish --tag beta
```

用户可以通过 npm install demo@beta 或者 npm install demo@1.0.1-0 来安装。

### 当 prerelease 版本稳定之后，可以把它设置为稳定版本

```sh
# 首先可以查看当前所有的最新版本，包括 prerelease 与稳定版本
npm dist-tag ls

# 设置 1.0.1-1 版本为稳定版本
npm dist-tag add demo@1.0.1-1 latest

# 或者通过 tag 来设置
npm dist-tag add demo@beta latest
```

### 查看模块的版本信息

```sh
npm info
```
