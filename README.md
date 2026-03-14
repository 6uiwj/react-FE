# 🛵 배달 주문 서비스 — React 프론트엔드

> **[delivery-app](https://github.com/6uiwj/delivery-app)** 백엔드 프로젝트의 프론트엔드 구현체입니다.

---

## 📌 프로젝트 소개

음식 주문 관리 플랫폼의 프론트엔드입니다.  

---

## 🖥️ 기술 스택

| 항목       | 기술                             |
| ---------- | -------------------------------- |
| 프레임워크 | React (Vite)                     |
| 언어       | JavaScript                       |
| 스타일     | CSS                              |
| API 통신   | Fetch API (axios 또는 직접 구현) |

---

## 📁 프로젝트 구조

```
src
├─ api
│   └─ axios.js           # axios 공통 설정 (baseURL, interceptor 등)
│
├─ assets
│   └─ react.svg          # 정적 이미지 파일
│
├─ pages
│   ├─ LoginPage.jsx      # 로그인 화면
│   ├─ StoreListPage.jsx  # 가게 목록 화면
│   └─ StoreMenuPage.jsx  # 가게 메뉴 화면
│
├─ App.css              
├─ App.jsx                # React Router 설정
├─ index.css              # 전체 글로벌 스타일
└─ main.jsx               # React 앱 시작점 (ReactDOM.render)
```

---

## 🔗 연동 백엔드

- **백엔드 리포지토리**: [6uiwj/delivery-app](https://github.com/6uiwj/delivery-app)

---

## 🚀 실행 방법

### 사전 준비

- 백엔드 서버 실행 (또는 배포 서버 사용)

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 🤝 관련 프로젝트

| 역할                        | 리포지토리                                                  |
| --------------------------- | ----------------------------------------------------------- |
| 백엔드 (Spring Boot + Java) | [6uiwj/delivery-app](https://github.com/6uiwj/delivery-app) |
| 프론트엔드 (React)          | [6uiwj/react-FE](https://github.com/6uiwj/react-FE)         |

---
