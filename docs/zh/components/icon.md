# Icon 图标

安装 `coot-ui` 时会默认安装 `@coot-ui/icons`，支持全量引入或者按需引入图标。

## Example

### 全量引入

在入口文件添加如下代码全量引入图标：

```ts
import '@coot-ui/icons';
```

然后通过 `<coot-icon-xxx></coot-icon-xxx>` 的方式使用图标。

<demo vue="icons/all.vue"></demo>

### 按需引入

如果你不想全量引入，通过 `import '@coot-ui/icons/xxx';` 按需引入图标。

<demo vue="icons/import.vue"></demo>

### 颜色尺寸

可以通过常规 `style` 样式中的 `font-size` 和 `color` 设置图标的大小和颜色。

<demo vue="icons/base.vue"></demo>

### 旋转图标

通过设置 `spin` 属性让图标旋转。

<demo vue="icons/spin.vue"></demo>

### 图标大全

`@coot-ui/icons` 内置的图标列表如下，点击可复制代码。

<icon-list></icon-list>

## API

### 图标属性

<div class="table-col-5">

| 属性  | 类型      | 说明                                                            | 可选值         | 默认值  |
| ----- | --------- | --------------------------------------------------------------- | -------------- | ------- |
| spin  | `boolean` | 是否旋转                                                        | `true`/`false` | `false` |
| style | -         | 通过原生 `style` 样式 `font-size` 和 `color` 设置按钮大小和颜色 | -              | -       |

</div>
