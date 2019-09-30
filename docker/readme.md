# docker

## 列出镜像

docker image ls

## 镜像体积

docker system df

## 虚悬镜像

列出

docker image ls -f dangling=true

-f: filter

删除

docker image prune

## 中间层镜像

包括中间层镜像在内的所有镜像

docker image ls -a

## 以特定格式显示

只列出id

docker image ls -q

比如 docker image ls -q redis / docker image ls -q -f before=mongo:3.2

Go 的模板语法

docker image ls --format "{{.ID}}: {{.Repository}}"

## 删除本地镜像

docker image rm [选项] <镜像1> [<镜像2> ...]

如果有用这个镜像启动的容器存在（即使容器没有运行），那么同样不可以删除这个镜像

容器是以镜像为基础，再加一层容器存储层，组成这样的多层存储结构去运行的。因此该镜像如果被这个容器所依赖的，那么删除必然会导致故障

如果这些容器是不需要的，应该先将它们删除，然后再来删除镜像。

## 进入容器

以交互式终端方式进入 webserver 容器，并执行了 bash 命令，也就是获得一个可操作的 Shell

docker exec -it xxx bash

## 容器的存储层改动的查看

docker diff

## 将容器的存储层保存下来成为镜像

docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]]

慎用 docker commit

使用 docker commit 命令虽然可以比较直观的帮助理解镜像分层存储的概念，但是实际环境中并不会这样使用。

## 查看镜像内的历史记录

docker history

## Dockerfile

Dockerfile 是一个文本文件，其内包含了一条条的 指令(Instruction)，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。

Dockerfile 支持 Shell 类的行尾添加 \ 的命令换行方式，以及行首 # 进行注释的格式

### FROM 指定基础镜像

Docker 还存在一个特殊的镜像，名为 scratch。这个镜像是虚拟的概念，并不实际存在，它表示一个空白的镜像。

### RUN 执行命令

其格式有两种：

1. shell 格式：RUN <命令>
2. exec 格式：RUN ["可执行文件", "参数1", "参数2"]

Dockerfile 中每一个指令都会建立一层，RUN 也不例外。每一个 RUN 的行为，就和刚才我们手工建立镜像的过程一样：新建立一层，在其上执行这些命令，执行结束后，commit 这一层的修改，构成新的镜像。

使用一个 RUN 指令，并使用 && 将各个所需命令串联起来

### COPY 复制文件

- COPY [--chown=\<user>:\<group>] <源路径>... <目标路径>
- COPY [--chown=\<user>:\<group>] ["<源路径1>",... "<目标路径>"]

COPY 指令将从构建上下文目录中 <源路径> 的文件/目录复制到新的一层的镜像内的 <目标路径> 位置。

### ADD 更高级的复制文件

ADD 指令和 COPY 的格式和性质基本一致。但是在 COPY 基础上增加了一些功能。

### CMD 容器启动命令

格式：

- shell 格式：CMD <命令>
- exec 格式：CMD ["可执行文件", "参数1", "参数2"...]
- 参数列表格式：CMD ["参数1", "参数2"...]。在指定了 ENTRYPOINT 指令后，用 CMD 指定具体的参数

Docker 不是虚拟机，容器中的应用都应该以前台执行

### ENTRYPOINT 入口点

ENTRYPOINT 的格式和 RUN 指令格式一样，分为 exec 格式和 shell 格式。

ENTRYPOINT 的目的和 CMD 一样，都是在指定容器启动程序及参数。ENTRYPOINT 在运行时也可以替代，不过比 CMD 要略显繁琐，需要通过 docker run 的参数 --entrypoint 来指定。

当指定了 ENTRYPOINT 后，CMD 的含义就发生了改变，不再是直接的运行其命令，而是将 CMD 的内容作为参数传给 ENTRYPOINT 指令

#### 让镜像变成像命令一样使用

当存在 ENTRYPOINT 后，CMD 的内容将会作为参数传给 ENTRYPOINT

#### 应用运行前的准备工作

启动容器就是启动主进程，但有些时候，启动主进程前，需要一些准备工作。

这些准备工作是和容器 CMD 无关的，无论 CMD 为什么，都需要事先进行一个预处理的工作。这种情况下，可以写一个脚本，然后放入 ENTRYPOINT 中去执行，而这个脚本会将接到的参数（也就是 <CMD>）作为命令，在脚本最后执行。

### ENV 设置环境变量

格式有两种：

- ENV \<key> \<value>
- ENV \<key1>=\<value1> \<key2>=\<value2>...

### ARG 构建参数

格式：ARG <参数名>[=<默认值>]

构建参数和 ENV 的效果一样，都是设置环境变量。所不同的是，ARG 所设置的构建环境的环境变量，在将来容器运行时是不会存在这些环境变量的。但是不要因此就使用 ARG 保存密码之类的信息，因为 docker history 还是可以看到所有值的。

### VOLUME 定义匿名卷

格式为：

- VOLUME ["<路径1>", "<路径2>"...]
- VOLUME <路径>

为了防止运行时用户忘记将动态文件所保存目录挂载为卷，在 Dockerfile 中，我们可以事先指定某些目录挂载为匿名卷，这样在运行时如果用户不指定挂载，其应用也可以正常运行，不会向容器存储层写入大量数据。

### EXPOSE 声明端口

格式为 EXPOSE <端口1> [<端口2>...]

EXPOSE 指令是声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务。在 Dockerfile 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 docker run -P 时，会自动随机映射 EXPOSE 的端口。

要将 EXPOSE 和在运行时使用 -p <宿主端口>:<容器端口> 区分开来。-p，是映射宿主端口和容器端口，换句话说，就是将容器的对应端口服务公开给外界访问，而 EXPOSE 仅仅是声明容器打算使用什么端口而已，并不会自动在宿主进行端口映射。

### WORKDIR 指定工作目录

格式为 WORKDIR <工作目录路径>

使用 WORKDIR 指令可以来指定工作目录（或者称为当前目录），以后各层的当前目录就被改为指定的目录，如该目录不存在，WORKDIR 会帮你建立目录。

```Dockerfile
RUN cd /app
RUN echo "hello" > world.txt
```

如果将这个 Dockerfile 进行构建镜像运行后，会发现找不到 /app/world.txt 文件，或者其内容不是 hello。原因其实很简单，在 Shell 中，连续两行是同一个进程执行环境，因此前一个命令修改的内存状态，会直接影响后一个命令；而在 Dockerfile 中，这两行 RUN 命令的执行环境根本不同，是两个完全不同的容器。这就是对 Dockerfile 构建分层存储的概念不了解所导致的错误。

之前说过每一个 RUN 都是启动一个容器、执行命令、然后提交存储层文件变更。第一层 RUN cd /app 的执行仅仅是当前进程的工作目录变更，一个内存上的变化而已，其结果不会造成任何文件变更。而到第二层的时候，启动的是一个全新的容器，跟第一层的容器更完全没关系，自然不可能继承前一层构建过程中的内存变化。

因此如果需要改变以后各层的工作目录的位置，那么应该使用 WORKDIR 指令

### USER 指定当前用户

格式：USER <用户名>[:<用户组>]

USER 指令和 WORKDIR 相似，都是改变环境状态并影响以后的层。WORKDIR 是改变工作目录，USER 则是改变之后层的执行 RUN, CMD 以及 ENTRYPOINT 这类命令的身份。

和 WORKDIR 一样，USER 只是帮助你切换到指定用户而已，这个用户必须是事先建立好的，否则无法切换。

### HEALTHCHECK 健康检查

格式：

- HEALTHCHECK [选项] CMD <命令>：设置检查容器健康状况的命令
- HEALTHCHECK NONE：如果基础镜像有健康检查指令，使用这行可以屏蔽掉其健康检查指令

当在一个镜像指定了 HEALTHCHECK 指令后，用其启动容器，初始状态会为 starting，在 HEALTHCHECK 指令检查成功后变为 healthy，如果连续一定次数失败，则会变为 unhealthy

HEALTHCHECK 支持下列选项：

- --interval=<间隔>：两次健康检查的间隔，默认为 30 秒
- --timeout=<时长>：健康检查命令运行超时时间，如果超过这个时间，本次健康检查就被视为失败，默认 30 秒
- --retries=<次数>：当连续失败指定次数后，则将容器状态视为 unhealthy，默认 3 次

```Dockerfile
FROM nginx
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
HEALTHCHECK --interval=5s --timeout=3s \
  CMD curl -fs http://localhost/ || exit 1
```

这里我们设置了每 5 秒检查一次（这里为了试验所以间隔非常短，实际应该相对较长），如果健康检查命令超过 3 秒没响应就视为失败，并且使用 `curl -fs http://localhost/ || exit 1` 作为健康检查命令。

使用 docker build 来构建这个镜像：

```sh
docker build -t myweb:v1 .
```

构建好了后，我们启动一个容器：

```sh
docker run -d --name web -p 80:80 myweb:v1
```

当运行该镜像后，可以通过 docker container ls 看到最初的状态为 (health: starting)

在等待几秒钟后，再次 docker container ls，就会看到健康状态变化为了 (healthy)

如果健康检查连续失败超过了重试次数，状态就会变为 (unhealthy)

为了帮助排障，健康检查命令的输出（包括 stdout 以及 stderr）都会被存储于健康状态里，可以用 docker inspect 来查看。

```sh
docker inspect --format '{{json .State.Health}}' web | python -m json.tool
```

### ONBUILD 为他人做嫁衣裳

格式：ONBUILD <其它指令>

ONBUILD 是一个特殊的指令，它后面跟的是其它指令，比如 RUN, COPY 等，而这些指令，在当前镜像构建时并不会被执行。只有当以当前镜像为基础镜像，去构建下一级镜像的时候才会被执行。

### 构建镜像

docker build [选项] <上下文路径/URL/->

比如：

docker build -t xxx

### 镜像构建上下文（Context）

会看到 docker build 命令最后有一个 .

. 表示当前目录，而 Dockerfile 就在当前目录，这是在指定 上下文路径。

当我们进行镜像构建的时候，并非所有定制都会通过 RUN 指令完成，经常会需要将一些本地文件复制进镜像，比如通过 COPY 指令、ADD 指令等。而 docker build 命令构建镜像，其实并非在本地构建，而是在服务端

这就引入了上下文的概念。当构建的时候，用户会指定构建镜像上下文的路径，docker build 命令得知这个路径后，会将路径下的所有内容打包，然后上传给 Docker 引擎。这样 Docker 引擎收到这个上下文包后，展开就会获得构建镜像所需的一切文件。

如果在 Dockerfile 中这么写：

```Dockerfile
COPY ./package.json /app/
```

这并不是要复制执行 docker build 命令所在的目录下的 package.json，也不是复制 Dockerfile 所在目录下的 package.json，而是复制 上下文（context） 目录下的 package.json。

路径已经超出了上下文的范围，Docker 引擎无法获得这些位置的文件。如果真的需要那些文件，应该将它们复制到上下文目录中去。

一般来说，应该会将 Dockerfile 置于一个空目录下，或者项目根目录下。如果该目录下没有所需文件，那么应该把所需文件复制一份过来。如果目录下有些东西确实不希望构建时传给 Docker 引擎，那么可以用 .gitignore 一样的语法写一个 .dockerignore，该文件是用于剔除不需要作为上下文传递给 Docker 引擎的。

以用 -f 参数指定某个文件作为 Dockerfile。

## 其它 docker build 的用法

### 直接用 Git repo 进行构建

docker build 还支持从 URL 构建，比如可以直接从 Git repo 中构建

docker build https://github.com/twang2218/gitlab-ce-zh.git#:11.1

这行命令指定了构建所需的 Git repo，并且指定默认的 master 分支，构建目录为 /11.1/，然后 Docker 就会自己去 git clone 这个项目、切换到指定分支、并进入到指定目录后开始构建。

### 用给定的 tar 压缩包构建

docker build http://server/context.tar.gz

如果所给出的 URL 不是个 Git repo，而是个 tar 压缩包，那么 Docker 引擎会下载这个包，并自动解压缩，以其作为上下文，开始构建。

## 多阶段构建

