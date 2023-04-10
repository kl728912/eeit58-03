<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
	crossorigin="anonymous">
  <!-- 中文字型樣式 -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@500&family=Noto+Sans+JP:wght@700&family=Noto+Sans+TC:wght@900&display=swap"
        rel="stylesheet">
        
         <!-- css -->
<link rel="stylesheet"
	href="http://localhost:8080/UerMangementV1/assets/css/login.css" />
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
	crossorigin="anonymous"></script>

</head>
<body>
	<div class="wrapper">
		<!-- 登入畫面 -->
		<div class="container-login">
			<div class="login">
				<form action="login" method="post" class="form">
					<h1>Join 揪羽球</h1>
					<div class="group">
						<label for="user-id">帳號</label> <input type="text" name="username"
							id="user-account">
					</div>
					<div class="group">
						<label for="user-password">密碼</label> <input type="password"
							name="password" id="user-password">
					</div>
					<div class="btn-group">
						<button type="submit" value="Submit">登入</button>

					</div>
					<p>
						您還沒有帳號嗎 ?<a href="#" class="register-link">點擊註冊</a>
					</p>
				</form>
			</div>





					<div class="register">
				<form action="Register" method="post" class="form">
					<h2>Join 揪羽球</h2>

					<div class="group">
						<label for="user-password">帳號</label> <input type="text"
							name="uname" id="user-account">
					</div>
					<div class="group">
						<label for="user-password">密碼</label> <input type="password"
							name="password" id="user-password">
					</div>
					<div class="group">
						<label for="user-password">Email</label> <input type="text"
							name="email" id="user-account">
					</div>
					<div class="group">
						<label for="user-password">Phone</label> <input type="text"
							name="phone" id="user-account">
					</div>

					<div class="btn-group">
						<button type="submit" value="Submit">註冊</button>

					</div>
					<p>
						您已經擁有帳號嗎 ?<a href="#" class="login-link">返回登入</a>
					</p>
				</form>
			</div>
		</div>
	</div>
	<script src="http://localhost:8080/UerMangementV1/assets/js/login.js"></script>
</body>
</html>