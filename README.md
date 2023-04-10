## 

### 這個project底下一共有三個功能登入（login）、註冊（signup）、

### 另一個是會員/活動資料crud（badminton）。



以 badminton為例一共會有三層 分別是bean/dao/web(servlet)

*  src
  * com.eeit58.badminton.bean => Java bean類 filed set get
  * com.eeit58.badminton.dao => 資料庫crud
  * com.eeit58.badminton.web => servlet

其他兩個功能一樣方式都有三層



### JSP/樣式效果的部分



login.jsp(登入/註冊)

user-list.jsp（會員/活動資料crud）

login.jsp 可直接切換註冊，輸入完畢後，點擊上一頁登入會直接跳轉 user-list.jsp

至於樣式的整個包我放在webapp底下assets下

記得JSP裡頭引入css/js 要用絕對路徑的方式才會讀到assets

舉個例子 <**link** rel=*"stylesheet" href=*"http://localhost:8080/UerMangementV1/assets/css/login.css"* />



* webapp
  * jsp 直接放在webapp底下
  * assets
    * css
    * images
    * js



## 資料庫部分(userdb)

先創一個DB叫``userdb``



login & signup這兩個功能吃同一個table => ``member``

CREATE TABLE `member` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;





user-list（會員crud）額外在吃另一個table => ``users``

 CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;