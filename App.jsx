import { useState } from "react";
import axios from "axios";

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); //message: 화면에 보여줄 값, setMessage: 값을 바꾸는 함수 
  //초기값 ""

  const handleLogin = () => {
    axios.post("http://localhost:8080/v1/auth/login", {
      userEmail: userEmail,
      password: password
    })
    .then(res => {
      const token = res.data.accessToken;
      localStorage.setItem("accessToken", token);
      setMessage("로그인 성공!");
    })
    .catch(err => {
      console.error(err);
      setMessage("로그인 실패");
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

      <p>{message}</p>
    </div>
  );
 }
  

export default App
