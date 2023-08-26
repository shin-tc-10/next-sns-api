// Node.js用の軽量なWebアプリフレームワーク
const express = require("express");
// expressアプリのインスタンスでアプリの設定やルーティング定義、ミドルウェアの追加などができる
const app = express();
// 各機能に合わせエンドポイントやロジックを下記のルータで定義できる
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const usersRoute = require("./routers/users");
// Cross-Origin Resource Sharingのためのミドルウェア。異なるドメインやポートからのリクエストを受け入れるための設定が容易になる。セキュリティを保ちつつクライアントからのリクエストを許可できる
const cors = require("cors");

require("dotenv").config();

const PORT = 10000;

// 異なるドメインやポートからのリクエストをセキュリティ上の制約を満たしているかを確認
app.use(cors());
// クライアントから送信されたJSONデータをJSオブジェクトとして扱う
app.use(express.json());
// authに対するリクエストをauthRouteで定義したモジュールで処理する
app.use("/api/auth", authRoute);
// postsに対するリクエストをpostsRouteで定義したモジュールで処理する
app.use("/api/posts", postsRoute);
// usersに対するリクエストをusersRouteで定義したモジュールで処理する
app.use("/api/users", usersRoute);

// expressアプリで指定のPORT番号で起動させる
app.listen(PORT, () => console.log(` server is runnning on Port ${PORT}`));
