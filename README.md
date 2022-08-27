# OctoShop-电商小项目（登录流程实现）

## 项目所用技术：
前端：vue vueRouter naive-ui axios
后端：express redis mongodb

## 项目运行命令：
```
cd client && npm install && npm run serve
cd serve && npm install && node app.js
```

## 具体实现功能：
登录注册
修改密码
token身份验证
bcrypt密码加密
axios二次封装
邮箱验证码发送与存储

## 后端数据接口：
/user/login
/user/register
/user/modify_pwd
/user/modify_avatar
/user/verify_email

后端静态资源访问目录：/public

## 数据库：
Redis：存储邮箱对应的验证码，失效时间为10分钟。
MongoDB：存储用户信息，头像、用户名、邮箱和密码等信息。

## 其他工具：
jsonwebtoken：用于Token的生成与解析。
express-jwt：用于设置中间件对Token解析进行权限的验证。
nodemailer：用于实现邮箱验证码的发送。

## 项目展示图：
![img](https://github.com/CHScript/OctoShop/blob/main/demo/login.png)  
![img](https://github.com/CHScript/OctoShop/blob/main/demo/home.png)  
