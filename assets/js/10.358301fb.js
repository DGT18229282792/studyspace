(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{283:function(t,n,s){"use strict";s.r(n);var a=s(14),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("发布一个脚手架，封装常用的项目架构。")]),t._v(" "),n("p",[t._v("今天开始搭建自己的脚手架了，这里开始记录一下踩坑的过程。这个系列将会分成极大部分进行更新，第一版本主要是基于脚手架基本的创建流程的介绍，一步一步创建属于自己的定制化的脚手架。下载所指向的仓库模板可以自己去定义。在第一个版本中没有实现高度定制化的功能。只能下载你在github私服里面写好的项目模板。第二个版本现在正在建设中，目标是实现高度定制化的脚手架，通过脚手架自定义生成你所选择的功能模块，比如typescript、babel、vuex、vue2、vue3、vite、axios、pinia等多项定制化功能自动进行项目框架的生成。第三个版本是在第二个版本中作进一步的丰富，将会加入我自己写好的指令库、UI组件库等功能。")]),t._v(" "),n("p",[t._v("先放项目npm地址: "),n("a",{attrs:{href:"https://www.npmjs.com/package/dgt-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/dgt-cli"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("这是github脚手架的源码："),n("a",{attrs:{href:"https://github.com/DGT18229282792/dgt-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/DGT18229282792/dgt-cli"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("这里先标明所用到的第三方库，chalk：终端文字颜色样式。path：路径模块。")]),t._v(" "),n("p",[t._v("fs-extra：文件模块。inquirer：用户交互模块。ora：输出动画模块。")]),t._v(" "),n("p",[t._v("项目最终的目录结构：")]),t._v(" "),n("div",{staticClass:"language-plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code")])]),n("p",[t._v("dgt-cli\n├─ bin   ---存放入口文件\n│  └─ enter.js\n├─ interactives ---不同用户交互封装，可以自行进行扩展\n│  ├─ isOverWrite.js ---处理是否重写同名文件夹\n│  └─ selectVueType.js ---选择vue版本\n├─ lib ---存放存放指令功能\n│  └─ create.js ---command对应的 dgt-cli create 项目名\n├─ package-lock.json\n├─ package.json ---依赖\n├─ README.md ---简介\n└─ utils ---存放工具类\n   ├─ download.js --- 下载git仓库到目录\n   └─ oraClass.js ---动画类")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code")])]),n("p",[t._v("第一步：")]),t._v(" "),n("p",[t._v("初始化项目基本结构，生成基本package.json文件：")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[t._v("npm init "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y\n")])])]),n("p",[t._v("生成：")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dgt-cli"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我的第一个脚手架"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keywords"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"author"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DGT"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"license"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ISC"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里配置入口文件，并挂载命令到全局")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bin"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dgtCli"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bin/enter.js"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("在项目根目录下创建bin目录，在bin目录下面创建enter.js:")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token hashbang comment"}},[t._v("#! /usr/bin/env node")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表明当前环境是在node环境下运行")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'helloWorld'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("第一行是为了指定当前的环境是node环境，必须要添加，不添加会报错。完成这一步后修改package.json指定入口文件，注意一定要用对象的形式，不然会报错。\n第二步：")]),t._v(" "),n("p",[t._v("因为与用户进行交互需要用到comannd库，这里先安装一下：")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[t._v("npm i commander\n")])])]),n("p",[t._v("现在修改入口文件：Step2: version 方法可以配置版本信息提示\nStep3: name 和 usage 方法分别配置 cli 名称和 --help 第一行提示")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token hashbang comment"}},[t._v("#! /usr/bin/env node")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表明当前环境是在node环境下运行")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" program "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commander"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commander 来实现脚手架命令的配置")]),t._v("\n\nprogram"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dgt-cli"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("usage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<command> [option]")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("1.0.0")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprogram"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// process.argv 是 nodejs 提供的属性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helloWorld"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("当运行dgt-cli create ***的时候会从enter.js开始，")]),t._v(" "),n("div",{staticClass:"language-plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v('#! /usr/bin/env node\n// 表明当前环境是在node环境下运行\nconst program = require("commander"); // commander 来实现脚手架命令的配置\nconst chalk = require("chalk"); // chalk用美化终端命令的样式\n\nprogram.name("dgt-cli").usage(`<command> [option]`);\nprogram.version(`dgt-cli ${require("../package.json").version}`);\nprogram\n  .command("create <project-name>") // 增加创建指令\n  .description("use dgt-cli create ** to create a new program") // 添加描述信息\n  .option(\n    "-f, --force",\n    "overwrite target directory if it exists(如果目录存在，强制删除)"\n  ) // 强制覆盖\n  .action((projectName, cmd) => {\n    // 处理用户输入create 指令附加的参数\n    require("../lib/create")(projectName, cmd);\n  });\nprogram\n  .command("config [value]") // config 命令\n  .description("inspect and modify the config")\n  .option("-g, --get <key>", "get value by key")\n  .option("-s, --set <key> <value>", "set option[key] is value")\n  .option("-d, --delete <key>", "delete option by key")\n  .action((value, keys) => {\n    // value 可以取到 [value] 值，keys会获取到命令参数\n    console.log(value, keys);\n  });\n// 监听 --help 指令\nprogram.on("--help", function () {\n  // 前后两个空行调整格式，更舒适\n  console.log();\n  console.log(\n    ` Run ${chalk.green(\n      "dgt-cli <command> --help"\n    )} for detailed usage of given command.`\n  );\n  console.log();\n});\n\nprogram.parse(process.argv); // process.argv 是 nodejs 提供的属性\n')])])]),n("p",[t._v("可知这里注册了一个comannd指令，create。\n现在进入到create方法里面看一看到底发生了什么？")]),t._v(" "),n("div",{staticClass:"language-plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v('/*\n*@Description: 创建项目的方法\n*@MethodAuthor:  DGT\n*@ param: {\n    programeName：项目名称,\n    cmd:用户口令对象\n}\n*@ Date: @Date:2022-05-31 20:06:35\n*/\nconst path = require("path"); // 路径模块\nconst fs = require("fs-extra"); // 文件读取操作\nconst chalk = require("chalk"); // 输出美化\nconst download = require("../utils/download"); //下载仓库代码\nconst oraClass = require("../utils/oraClass"); // 封装ora动画\n\nconst isOverwriteFun = require("../interactives/isOverWrite"); // 获取是否覆盖同名文件交互\nconst selectVueTypeFun = require("../interactives/selectVueType"); // 获取选择下载的对应的vue2还是vue3的模板仓库\n\nconst loadObj = new oraClass();\nmodule.exports = async function (projectName, options) {\n  // 获取当前工作目录\n  const cwd = process.cwd();\n  // 拼接得到项目目录\n  const targetDirectory = path.join(cwd, projectName);\n  // 判断目录是否存在\n  if (fs.existsSync(targetDirectory)) {\n    // 判断是否使用 --force 参数\n    if (options.force) {\n      // 删除重名目录(remove是个异步方法)\n      await fs.remove(targetDirectory);\n    } else {\n      let isOverwrite = await isOverwriteFun();\n      // 选择 Cancel\n      if (!isOverwrite) {\n        console.log("Cancel");\n        return;\n      } else {\n        // 选择 Overwirte ，先删除掉原有重名目录\n        loadObj.start("removing origin file...");\n        await fs.remove(targetDirectory);\n        loadObj.sucess("removing origin file success!");\n      }\n    }\n  }\n  let vue_version = await selectVueTypeFun(); // 获取对应的仓库模板\n  download(`${returnRightUrl(vue_version)}`, projectName,tips);\n};\n/*\n *@Description: 根据用户输入返回对应的项目模板地址\n *@MethodAuthor:  DGT\n *@ param: {type:vue版本}\n *@ Date: @Date:2022-06-01 15:24:46\n */\nconst returnRightUrl = (type) => {\n  const urlMap = new Map();\n  urlMap\n    .set("v2", "github:DGT18229282792/npm-auto-loader")\n    .set("v3", "github:DGT18229282792/monitor-sdk");\n  return urlMap.get(type);\n}\n/*\n*@Description: 下载成功提示开启项目\n*@MethodAuthor:  DGT\n*@ param: {}\n*@ Date: @Date:2022-06-02 23:22:27\n*/\nconst tips = (projectName) =>{\n  console.log(``)\n  console.log(`${chalk.green(`cd ${projectName}`)}`)\n  console.log(`${chalk.green(`npm install`)}`)\n  console.log(`${chalk.green(`npm run serve`)}`)\n  console.log(``)\n}\n')])])]),n("p",[t._v("首先获取当前的工作目录，然后拼接得到项目的目录。然后判断有没有同名的文件夹存在。如果有的话就调用是否覆盖删除同名文件夹方法。然后弹出vue模板选择交互。获取到用户所选择的你事先写好的vue版本。最后调用我们的下载方法进行下载git仓库的项目到我们对应的文件夹中。到这里create指令就结束了。\n我们就能够指定git仓库，然后让用户自己选择然后进行下载模板。")]),t._v(" "),n("p",[t._v("最后一步是发布到npm。")]),t._v(" "),n("p",[t._v("终端登录你的npm账号。执行npm login按照提示进行输入。登录成功后。进行版本的配置。输入npm version 1.0.0指定你的脚手架的第一个版本号。然后执行npm publish进行发布。最后你再登录npm官网，在你的主页就可以看到你刚刚上传的这个脚手架了。")]),t._v(" "),n("p",[t._v("其他人使用起来也特别简单。只需要安装npm i dgt-cli就可以了。")])])}),[],!1,null,null,null);n.default=e.exports}}]);