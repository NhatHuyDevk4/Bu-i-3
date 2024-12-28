import React from "react";

const Login = () => {
  const isLogin = false;

  return (
    <>
      {isLogin == true ? (
        <div>Thông tin người dùng, button logout</div>
      ) : (
        <div>Nút đăng nhập, đăng ký</div>
      )}

      {isLogin && <div>Avatar </div>}
    </>
  );
};

export default Login;
