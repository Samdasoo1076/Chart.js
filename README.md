### 회사에서 과제로 했던 Chart.js 입니다 
## localhost로 DB 연결 하여 작업했습니다

### DB 연결 설정
## host: localhost
## user: root
## password : 1234
## database : test

테이블은 Chart_data라는 테이블을 만들었습니다

Chart_data에 컬럼은

id int(11) not null, Auto Increment, Primary key 
label varchar(255)
value int(11) 입니다 

주의사항은 value에 Data Type을 varchar로 할 시 chart_js 데이터를 뿌릴때 데이터 형변환을 해야합니다(parseInt)


---------------------------------------------

API_JS 키는 안 올렸습니다.
