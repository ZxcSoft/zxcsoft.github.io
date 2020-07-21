(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{532:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("Mongodb作为典型的NoSQL数据库, 支持了SQL方式查询, 可以用来存储嵌套文档, 日志等")])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-下载mongodb-选择tgz类型"}},[s._v("1. 下载mongodb, 选择tgz类型")])]),a("li",[a("a",{attrs:{href:"#_2-解压文件-创建文件夹"}},[s._v("2. 解压文件, 创建文件夹")])]),a("li",[a("a",{attrs:{href:"#_3-启动mongodb"}},[s._v("3. 启动mongodb")])]),a("li",[a("a",{attrs:{href:"#_4-进入mongo命令行"}},[s._v("4. 进入mongo命令行")])]),a("li",[a("a",{attrs:{href:"#_5-设置验证后-重启服务"}},[s._v("5. 设置验证后, 重启服务")])]),a("li",[a("a",{attrs:{href:"#_6-创建非管理员账号"}},[s._v("6. 创建非管理员账号")])]),a("li",[a("a",{attrs:{href:"#_7-springboot连接mongodb"}},[s._v("7. Springboot连接mongodb")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"_1-下载mongodb-选择tgz类型"}},[s._v("1. 下载mongodb, 选择tgz类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://www.mongodb.com/download-center/community\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-解压文件-创建文件夹"}},[s._v("2. 解压文件, 创建文件夹")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mongodb-linux-x86_64-rhel80-4.2.7.tgz\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mongodb-linux-x86_64-rhel80-4.2.7\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /root/mongo/data\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /root/mongo/logs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_3-启动mongodb"}},[s._v("3. 启动mongodb")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./bin/mongod -dbpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/mongo/data -logpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/mongo/logs/mongodb.log -logappend -port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" -bind_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 -fork\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-进入mongo命令行"}},[s._v("4. 进入mongo命令行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./bin/mongo\n\n-- 进入管理数据库\nuse admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n-- 创建管理员, 设置验证\ndb.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(",pwd:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(", roles:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dbAdminAnyDatabase'")]),s._v(",db:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(",db:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_5-设置验证后-重启服务"}},[s._v("5. 设置验证后, 重启服务")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./bin/mongod -dbpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/mongo/data -logpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/mongo/logs/mongodb.log -logappend -port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" -bind_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 -fork -auth\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6-创建非管理员账号"}},[s._v("6. 创建非管理员账号")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./bin/mongo\n\n-- 进入用户数据库\nuser "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n-- 创建用户\ndb.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        user: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(",\n        pwd: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(",\n\n        roles: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbAdmin"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mechanisms"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SCRAM-SHA-1"')]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SCRAM-SHA-256"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"_7-springboot连接mongodb"}},[s._v("7. Springboot连接mongodb")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mongodb://{{USER}}:{{PASSWORD}}@192.168.10.3:27017/{{DATABASE}}?authSource={{DATABASE}}&authMechanism=SCRAM-SHA-1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);