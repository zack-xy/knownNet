---
title: 配置项目git提交规范（约定式提交）
author: Zack Zheng
date: 2023/07/10 00:00
categories:
 - git
tags:
 - 规范
 - git
---

[什么是约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

提交的信息大致规范是这样：

```
<类型>[可选 范围]: <描述>

[可选 正文]
[可选 脚注]
```

手动写这样的描述基本上是不切实际的，所以要配置自动化生成



____



1. 全局安装Commitizen

   `npm install -g commitizen`

2. 安装和配置cz-customizable插件

   2.1. 安装cz-customizable

   `pnpm add cz-customizable@7.0.0 -D`

   2.2. 在package.json中添加配置

   ```
   ....
   "config": {
   	"commitizen": {
   		"path": "node_modules/cz-customizable"
   	}
   }
   ```

3. 根目录下创建.cz-config.js自定义提示文件

   ```
   module.exports = {
     types: [
       { value: 'feat', name: 'feat:     A new feature' },
       { value: 'fix', name: 'fix:      A bug fix' },
       { value: 'docs', name: 'docs:     Documentation only changes' },
       {
         value: 'style',
         name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
       },
       {
         value: 'refactor',
         name: 'refactor: A code change that neither fixes a bug nor adds a feature',
       },
       {
         value: 'perf',
         name: 'perf:     A code change that improves performance',
       },
       { value: 'test', name: 'test:     Adding missing tests' },
       {
         value: 'chore',
         name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
       },
       { value: 'revert', name: 'revert:   Revert to a commit' },
       { value: 'WIP', name: 'WIP:      Work in progress' },
     ],
   
     // 范围
     scopes: [{ name: 'blogs' }, { name: 'books' }, { name: 'program' }, { name: 'config' }],
   
     usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
     allowTicketNumber: false,
     isTicketNumberRequired: false,
     ticketNumberPrefix: 'TICKET-',
     ticketNumberRegExp: '\\d{1,5}',
   
     // it needs to match the value for field type. Eg.: 'fix'
     /*
     scopeOverrides: {
       fix: [
   
         {name: 'merge'},
         {name: 'style'},
         {name: 'e2eTest'},
         {name: 'unitTest'}
       ]
     },
     */
     // override the messages, defaults are as follows
     messages: {
       type: "Select the type of change that you're committing:",
       scope: '\nDenote the SCOPE of this change (optional):',
       // used if allowCustomScopes is true
       customScope: 'Denote the SCOPE of this change(optional):',
       subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
       body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
       breaking: 'List any BREAKING CHANGES (optional):\n',
       footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
       confirmCommit: 'Are you sure you want to proceed with the commit above?(Y/N)',
     },
   
     allowCustomScopes: true,
     allowBreakingChanges: ['feat', 'fix'],
     // skip any questions you want(要跳过的步骤)
     skipQuestions: ['scope', 'customScope', 'body', 'breaking', 'footer'],
   
     // limit subject length(提交描述的限制长度)
     subjectLimit: 100,
     // breaklineChar: '|', // It is supported for fields body and footer.
     // footerPrefix : 'ISSUES CLOSED:'
     // askForBreakingChangeFirst : true, // default is false
   };
   
   ```

   下面这个文件是基本解释，使用上面的一般模板

   ```
   // 配置解释
   module.exports = {
     // 可选类型
     types: [
       { value: 'feat', name: 'feat: 新功能' },
       { value: 'fix', name: 'fix: 修复' },
       { value: 'docs', name: 'docs: 文档变更' },
       { value: 'style', name: 'style: 代码格式' },
       { value: 'refactor', name: 'refactor: 重构' },
       { value: 'perf', name: 'perf: 性能优化' },
       { value: 'test', name: 'test: 增加测试' },
       { value: 'chore', name: 'chore: 构建过程或辅助工具的变动' },
       { value: 'revert', name: 'revert: 回退' },
       { value: 'build', name: 'build: 打包' },
       { value: 'WIP', name: 'WIP:      Work in progress' },
     ],
     // 消息步骤
     messages: {
       type: '请选择提交类型:',
       customScope: '请输入修改范围(可选):',
       subject: '请简要描述提交(必填):',
       body: '请输入详细描述(可选):',
       footer: '请选择要关闭的issue(可选):',
       confirmCommit: '确认使用以上信息提交?(y/n)'
     },
     // 跳过问题
     skipQuestions: ['body','footer'],
     // subject文字长度默认为72
     subjectLimit: 72
   }
   
   ```

4. 使用`git cz`代替`git commit`



____

现在，我们可以通过`git cz`生成提交信息，但是没有强制，依然可以手动提交其他信息

需要使用GitHooks限制提交

工具：commitlint+husky（commitlint校验提交信息，husky是git hook工具）

1. 安装commitlint

   `pnpm add @commitlint/config-conventional @commitlint/cli -D`

2. 创建commitlint.config.js文件

   ```
   module.exports = {
     // 继承的规则
     extends: ['@commitlint/config-conventional'],
     // 定义规则
     roles: {
       // type的类型定义: 表示git提交的type必须在以下类型范围之内
       'type-enum': [
         // 当前验证错误级别
         2,
         // 在什么情况下进行验证
         'always',
         // 范型内容
         [
           'feat',
           'fix',
           'docs',
           'style',
           'refactor',
           'perf',
           'test',
           'chore',
           'revert',
           'WIP'
         ]
       ],
       // subject大小写不做校验
       'subject-case': [0]
     }
   }
   ```



3. 安装husky

   `pnpm add husky -D`

4. 启动hooks，生成.husky文件夹

   `npx husky install`

5. 添加commitlint的hook到husky中

​		`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

____

配置校验，使提交前，代码都要符合eslint规范

1. 在pre-commit钩子里，添加eslint校验

   `npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"`

2. 配置自动eslint修复，使用lint-staged(只检查本次修改更新的代码)

   2.1 添加package.json配置

   ```
   "lint-staged": {
   	"src/**/*.{js,ts,tsx,vue,md}": [
   		"eslint --cache --fix",
   		"git add"
   	]
   }
   ```

   2.2 修改步骤1中pre-commit指令为：`npx lint-staged `
