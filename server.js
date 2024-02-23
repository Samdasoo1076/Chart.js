const express = require('express');
const mysql = require('mysql');
const app = express();

// 마리아 db 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});

// 데이터 가져오기
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM Chart_data';
  connection.query(query, (error, results) => {
    if (error) { // 쿼리 에러 날시 에러 출력
      console.error("쿼리 에러:", error);
      res.status(500).send("DB 에러"); 
      return;
    }
    res.json(results); //값 담기
  });
}); 

// html 위치 알아서 찾기
app.use(express.static(__dirname));

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, `http://localhost:3000/index.html`); //콘솔 출력시 링크 띄움
});