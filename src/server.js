import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import router from "./router.js";


const port = 8082;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

http.Server(app).listen(port, () => {
  console.log("server running at 8082");
})
.on('error', (e) => {
  console.log("error!!");
});

app.use(cors({
  origin: '*',
  Credential:true
}));
app.use(express.json({ limit : "50mb" }));
app.use(express.urlencoded({ limit:"50mb", extended: false }));
//json 데이터 받으려면 필수
//css,js 파일 적용
app.use(express.static(path.join(__dirname + "/public")));
app.use(router);
app.set('views',path.join(__dirname,"views"));
app.set('view engine', 'ejs');
