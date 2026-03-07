import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    api.post("/v1/auth/login", {
      userEmail: userEmail,
      password: password
    })
    .then(res => {
      const token = res.data.accessToken;
      localStorage.setItem("accessToken", token);

      alert("로그인 성공");
      navigate("/stores");
    })
    .catch(err => {
      console.error(err);
      alert("로그인 실패");
    });
  };

  return (
    <div>
      <h1>로그인</h1>

      <input
        type="text"
        placeholder="이메일"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}

export default LoginPage;