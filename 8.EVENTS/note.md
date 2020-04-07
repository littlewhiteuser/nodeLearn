## node fs 模块操作api，一般都分同步和异步，带sync的是同步
在代码运行期间最好使用异步，同步代码会造成阻塞问题
- readFile readFileSync
- writeFile，默认写都会转化成utf8格式来存储（并且会将文字清空，如果没有文件就创建文件，也可以通过a追加，r读取，w写）
- appendFile，添加文件
- mkdir，创建文件夹
- access，检测是否存在
- rmdir，删除文件夹
- readdir，读取路径
- stat，获取文件状态
    - isFile
    - isDirectory
- unlink，删除文件目录