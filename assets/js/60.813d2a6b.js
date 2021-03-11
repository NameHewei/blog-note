(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{266:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#安装"}},[t._v("安装")]),s("ul",[s("li",[s("a",{attrs:{href:"#包管理"}},[t._v("包管理")])]),s("li",[s("a",{attrs:{href:"#语法"}},[t._v("语法")])]),s("li",[s("a",{attrs:{href:"#django"}},[t._v("Django")])]),s("li",[s("a",{attrs:{href:"#scrapy"}},[t._v("scrapy")])])])])])]),t._v("\n[toc]"),s("p"),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("Ctrl+Z，再按回车 退出命令行")]),t._v(" "),s("li",[t._v("python -m pip install --upgrade pip  升级pip")]),t._v(" "),s("li",[t._v("A-Z 65-90; a-z:97-122")])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("ul",[s("li",[t._v("官网下载安装包")]),t._v(" "),s("li",[t._v("点击安装，注意勾选加入到环境变量")]),t._v(" "),s("li",[t._v("命令窗口输入 python  如果进入 交互式环境 证明成功")])]),t._v(" "),s("h3",{attrs:{id:"包管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包管理"}},[t._v("#")]),t._v(" 包管理")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("pip install virtualenv")])])]),t._v(" "),s("li",[s("p",[t._v("创建虚拟环境 "),s("code",[t._v("virtualenv venv")]),t._v(" 默认在当前目录创建一个虚拟环境venv 目录, 进入到 venv/Scripts  命令行输入 activate/deactivate  激活和退出虚拟环境")])])]),t._v(" "),s("h3",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("blockquote",[s("p",[t._v("官方地址 https://docs.python.org/3/tutorial/index.html")])]),t._v(" "),s("p",[s("code",[t._v("pass")]),t._v(": 仅仅是占位 因为有的地方如果没有占位会报错，比如函数声明不能是空函数")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"win10-开机获取本机ip并写入文件中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#win10-开机获取本机ip并写入文件中"}},[t._v("#")]),t._v(" win10 开机获取本机IP并写入文件中")]),t._v(" "),s("p",[t._v("运行：shell:startup")]),t._v(" "),s("p",[t._v("创建 .bat文件(如a.bat) 放入打开的启动文件夹")]),t._v(" "),s("p",[t._v(".bat文件内容")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('@echo off\nstart cmd /k "python文件地址 && python ip.py"\n')])])]),s("p",[t._v("python文件内容")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n\nhostname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getfqdn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\naddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostbyname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hostname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./ip.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hostname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'：'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" address\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" OSError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'没有文件'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'finally success:'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"django"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django"}},[t._v("#")]),t._v(" Django")]),t._v(" "),s("h4",{attrs:{id:"安装-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("blockquote",[s("p",[t._v("参考官网 https://docs.djangoproject.com/en/2.1/topics/install/#installing-official-release")])]),t._v(" "),s("ul",[s("li",[t._v("注意与python版本对应")]),t._v(" "),s("li",[t._v("使用pip安装(时间慢)")])]),t._v(" "),s("h4",{attrs:{id:"项目-包含应用与配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目-包含应用与配置"}},[t._v("#")]),t._v(" 项目(包含应用与配置)")]),t._v(" "),s("ul",[s("li",[t._v("创建project: django-admin startproject mysite(名称)")]),t._v(" "),s("li",[t._v("进入创建的project(与manage.py同级)，创建应用: python manage.py startapp appname")]),t._v(" "),s("li",[t._v("添加新文件，将不会触发自动重新加载，这时你得自己手动重启服务器")]),t._v(" "),s("li",[t._v("监听所有服务器的公开IP（你运行 Vagrant 或想要向网络上的其它电脑展示你的成果时很有用） python manage.py runserver 0:8000; 0 是 0.0.0.0 的简写")])]),t._v(" "),s("h5",{attrs:{id:"文件解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件解释"}},[t._v("#")]),t._v(" 文件解释")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("|- manege.py: 与项目进行交互的命令行工具集的入口\n|- project name (项目名称，文件夹也是该名称)\n|--- wsgi.py :python应用与web服务器之间的接口(一般不作更改)\n|--- urls.py : URL 配置文件\n|--- settings.py : 项目总配置文件，数据库，web应用，时间等配置\n      BASE_DIR：项目根目录\n      DEBUG：调试用，生产环境要关闭，打开后所有的无效访问都不会走400\n      ALLOWED_HOSTS：只允许哪些域名的访问，其它的全部报400\n      INSTALLED_APPS：自己创建的应用要加到这里面\n      TEMPLATES：模板的配置\n      _init_.py 声明模块的文件，一般内容为空，有了它，tutorial 才能在代码中被当作模块应用\n|--- appname (应用名称)\n|----\n")])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"scrapy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrapy"}},[t._v("#")]),t._v(" scrapy")]),t._v(" "),s("ul",[s("li",[t._v("报错 Spider must return Request, BaseItem, dict or None, 表示没有返回正确yield 后面的值")])]),t._v(" "),s("h4",{attrs:{id:"安装-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-3"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pip install Scrapy\n")])])]),s("ul",[s("li",[s("p",[t._v('安装scrapy报错：Microsoft Visual C++ 14.0 is required. Get it with "Microsoft Visual C++ Build Tools"')]),t._v(" "),s("ol",[s("li",[t._v("https://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted 下载对应版本twisted的whl文件")]),t._v(" "),s("li",[t._v("cp:python版本")]),t._v(" "),s("li",[t._v("amd64：64位")]),t._v(" "),s("li",[t._v("下载后在文件目录下执行： pip install Twisted-18.7.0-cp37-cp37m-win_amd64.whl(文件名)")])])]),t._v(" "),s("li",[s("p",[t._v("scrapy startproject youName  创建项目")])]),t._v(" "),s("li",[s("p",[t._v("scrapy genspider < name> < domain> 创建spider(在项目跟目录执行)")])]),t._v(" "),s("li",[s("p",[t._v("scrapy crawl(爬) spider名称")]),t._v(" "),s("ul",[s("li",[t._v("第一次执行会报错async语法错误 把用到该名称作为参数的文件全部作修改 把这个参数名改为其它即可")]),t._v(" "),s("li",[t._v("报错 No module named 'win32api'： https://pypi.org/project/pypiwin32/#files（下载文件pypiwin32-223-py3-none-any.whl 执行 pip install pypiwin32-223-py3-none-any.whl ）")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("[scrapy.spidermiddlewares.offsite] DEBUG: Filtered offsite request to:")]),t._v("表示request的地址和allow_domain地址冲突，被过滤。")])]),t._v(" "),s("li",[s("p",[t._v("设置 yield Request(url, callback=self.parse_item, "),s("em",[s("strong",[t._v("dont_filter=True")])]),t._v(")")])])]),t._v(" "),s("p",[t._v("导出为json\nscrapy crawl spider名称 -o test.json")]),t._v(" "),s("p",[t._v("注意配置FEED_EXPORT_ENCODING = 'utf-8' 否则中文会被转码")]),t._v(" "),s("p",[t._v("报403时注意把USER_AGENT加上")]),t._v(" "),s("p",[t._v("text() 获取文本\n@属性名  获取属性值")]),t._v(" "),s("p",[t._v("在父节点下使用xpath路径前要加./")]),t._v(" "),s("p",[t._v("去除换行空格用 xpath('normalize-space('.//div/text()')')")]),t._v(" "),s("p",[t._v("css:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("获取内容\ncss('::text')")])]),t._v(" "),s("li",[s("p",[t._v("返回属性值\nresponse.css('.logo a::attr(href)').extract() 返回的值数组")])]),t._v(" "),s("li",[s("p",[t._v("去掉空格\npython字符串对象的 strip() 方法")])]),t._v(" "),s("li",[s("p",[t._v("去掉换行\npython字符串对象的 .replace('\\n', '')")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);