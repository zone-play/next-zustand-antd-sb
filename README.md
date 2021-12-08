## Step1. 创建 next 应用

```base
yarn create next-app --typescript

yarn dev
```

> pages/api目录映射到/api/*. 此目录中的文件被视为API 路由而不是 React 页面。


## Step2. 安装 zustand

```base
yarn add zustand
```

## Step3. 安装 antd

```base
yarn add antd
```

## Step4. 安装配置 Storybook

```base
npx sb init

yarn storybook
```

> `.storybook/preview.js` 为 Storybook 配置 Next.js Images

```base
+ import * as NextImage from "next/image";

+ const OriginalNextImage = NextImage.default;

+ Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});
```

> `package.json` 为 Storybook 提供公共目录

```base
{
  ...
  
  "scripts": {
    - "storybook": "start-storybook -p 6006",
    - "build-storybook": "build-storybook"
    + "storybook": "start-storybook -p 6006 -s ./public",
    + "build-storybook": "build-storybook -s public"
  },
  
 ...

}
```

> `.storybook/preview.js` 为 Storybook 配置全局样式

```base
import 'antd/dist/antd.css';
```
