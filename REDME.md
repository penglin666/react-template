# 注意：打包上线时请注释或者删除babelrc的19——21行的热更新插件
build时控制台会输出 Uncaught ReferenceError: $RefreshReg$ is not defined,原因是生产环境不需要热更新，目前我并没有办法处理它
