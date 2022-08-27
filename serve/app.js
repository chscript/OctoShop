const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { expressjwt: jwt } = require('express-jwt');
const mongo = require('./utils/mongo');
const routes = require('./router');
const path = require('path');
const app = new express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//静态资源访问
app.use(express.static(path.join(__dirname, 'public')));

//中间件
app.use(jwt({
  secret: "rule", algorithms: ["HS256"]
}).unless({ path: ["/user/login", "/user/register", "/user/verify_email", "/user/modify_pwd"] }),
  (err, req, res, next) => {
    if (err) {
      res.json({
        code: 401,
        msg: err.message,
      })
    }
  }
)

mongo(app);
routes(app);

// 服务端监听5000端口
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000/");
})

module.exports = app