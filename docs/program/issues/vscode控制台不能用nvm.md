---
title: vscode控制台不能用nvm
lang: en-US
date: 2025/06/16 10:21:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

nvm已经正确安装了，而且在iTerm和mac自带的终端都是可以用的      
就是在vscode控制台用不了，报找不到nvm命令           
尝试了修改vscode配置，没有起效果       
现在的解决办法是：在vscode控制台运行`source ~/.zshrc`就可以用了     
但是vscode重启了，就又没用了，应该还是没配置好       

