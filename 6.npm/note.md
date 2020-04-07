

## 全局的模块
- 必须使用package.json中配置bin参数
- #! /usr/bin/env node （指定通过node来执行）

## npm link
- 将当前的目录临时放在全局模块下，方便调试

C:\Users\admin\AppData\Roaming\npm\zf -> C:\Users\admin\AppData\Roaming\npm\node_modules\node-lesson\bin\test
C:\Users\admin\AppData\Roaming\npm\node_modules\node-lesson -> D:\github\node\6.npm
访问zf命令会去找node-lesson模块下的bin的test，将node-lesson指向本地的node\6.npm下，模拟了全局模块

## npm版本号管理的问题
```
<ChooseDrawer
    :size=""  // 宽度, 不用带px
    title=""  // 标题
    type="selection"  // 列表类型，不传默认单选，selection多选
    :drawerVisible.sync=""  // 显示隐藏
    @searchForm=""  // 查询回调，参数包含了查询条件和分页，无需单独处理分页回调了
    @confirm=""  // 底部确认回调，参数是选中table的数组（单选即数组内只有一条）
    :formOptions=""  // 表单选项，可选文本或下拉类型，示例:{ label: '', type: 'text', field: '', width: '' }, { label: '', type: 'select', field: '', options: [{ value: '', label: '' }] }
    :tableOptions="" // 列表字段，type可选text，status，date，示例:{ label: '', type: 'text', field: '' }, { label: '', type: 'status', field: '', statusMap: { key: value } }
    :tableData="" // 列表数据
>
</ChooseDrawer>
import ChooseDrawer from '@/components/common/chooseDrawer/chooseDrawer'
```