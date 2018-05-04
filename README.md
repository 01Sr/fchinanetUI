## FchianetUI

fchinanetUI为fchinanet提供一个跨平台的操作界面，目前只有基础的登录功能。后续**可能**会完善其他功能

#### 使用方式

fchinanetUI仅提供操作界面，并不提供核心的网络登录功能，所以需要配合[fchinanet](https://github.com/01sr/fchinanet)使用。

[fchinanet](https://github.com/01sr/fchinanet)下载地址：[https://github.com/01sr/fchinanet/releases](https://github.com/01sr/fchinanet/releases)

- 下载对应平台的fchinanetUI压缩包，解压到任意目录，在解压文件根目录下分别有各平台的运行文件（macos : fchinanetUI.app, windows : fchinanetUI.exe, linux : fchinanetUI），运行即可。
- 第一次运行，尝试登录会提示下载对应平台的[fchinanet](https://github.com/01sr/fchinanet)程序，下载后放置于提示指定的目录下，并修改名称为fchinanet，下图为mac下的提示。

<img src='/var/folders/wy/jg635dz102scnq9_l8zd4n_r0000gn/T/abnerworks.Typora/image-20180504183823606.png' style="zoom:50%"/>

#### 关于

本项目用[Electron](https://electronjs.org/)实现。[Electron](https://electronjs.org/)是由Github开发，用HTML，CSS和JavaScript来构建跨平台桌面应用程序的一个开源库。 Electron通过将[Chromium](https://www.chromium.org/Home)和[Node.js](https://nodejs.org/)合并到同一个运行时环境中，并将其打包为Mac，Windows和Linux系统下的应用来实现这一目的。所以我只写了一个界面，编写了少量代码软件体积就高达100多M🙂，凑合着用吧。