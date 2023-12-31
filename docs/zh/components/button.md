# 按钮

## Example

### 按钮类型

通过 `type` 属性设置不同种类的按钮。

<demo vue="button/type/index.vue" vanilla="button/type/index.html"></demo>

### 带图标按钮

通过在按钮中添加 `coot-icon-xxx` 获得带图标的按钮。

<demo vue="button/icon/index.vue" vanilla="button/icon/index.html"></demo>

### 按钮状态

通过 `status` 属性设置按钮不同状态。

<demo vue="button/status/index.vue" vanilla="button/status/index.html"></demo>

### 按钮尺寸

通过 `size` 属性设置按钮不同状态。

<demo vue="button/size/index.vue" vanilla="button/size/index.html"></demo>

### 禁用按钮

通过 `disabled` 设置按钮为禁用状态。
<demo vue="button/disable/index.vue" vanilla="button/disable/index.html"></demo>

### 加载中按钮

通过 `loading` 设置按钮为加载中状态。
<demo vue="button/loading/index.vue" vanilla="button/loading/index.html"></demo>

### 长按钮

通过 `long` 设置按钮为父容器宽度 `100%`。
<demo vue="button/long/index.vue" vanilla="button/long/index.html"></demo>

### 按钮组

使用 `button-group` 包裹按钮，可以获得按钮组。
<demo vue="button/group/index.vue" vanilla="button/group/index.html"></demo>

## API

### Button 属性

<div class="table-col-5">

| 属性         | 类型      | 说明                                     | 可选值                                                 | 默认值    |
| ------------ | --------- | ---------------------------------------- | ------------------------------------------------------ | --------- |
| type         | `string`  | 按钮的类型                               | `default`/`primary`/`secondary`/`dashed`/`text`/`link` | `default` |
| status       | `string`  | 按钮的状态                               | `primary`/`success`/`warning`/`error`                  | `primary` |
| size         | `string`  | 按钮的尺寸                               | `default`/`small`/`mini`/`large`                       | `default` |
| round        | `boolean` | 是否为圆角按钮                           | `true`/`false`                                         | `false`   |
| circle       | `boolean` | 是否为圆形按钮                           | `true`/`false`                                         | `false`   |
| square       | `boolean` | 是否为方形按钮                           | `true`/`false`                                         | `false`   |
| disabled     | `boolean` | 是否禁用                                 | `true`/`false`                                         | `false`   |
| loading      | `boolean` | 是否为加载中                             | `true`/`false`                                         | `false`   |
| loadingFixed | `boolean` | 按钮切换到加载中时，是否保持宽度固定不变 | `true`/`false`                                         | `false`   |
| long         | `boolean` | 长度是否撑满父容器                       | `true`/`false`                                         | `false`   |
| icon         | `string`  | 图标按钮的图标名称                       | -                                                      | -         |

</div>

### Button 插槽

<div class="table-col-3">

| 插槽名 | 说明           | 作用域参数 |
| ------ | -------------- | ---------- |
| -      | Button 内容    | -          |
| icon   | 自定义前置图标 | -          |

</div>

### ButtonGroup 属性

<div class="table-col-5">

| 属性 | 类型     | 说明           | 可选值                           | 默认值    |
| ---- | -------- | -------------- | -------------------------------- | --------- |
| size | `string` | 组合按钮的尺寸 | `default`/`small`/`mini`/`large` | `default` |

</div>

### ButtonGroup 插槽

<div class="table-col-3">

| 插槽名 | 说明         | 作用域参数 |
| ------ | ------------ | ---------- |
| -      | 要组合的按钮 | -          |

</div>
