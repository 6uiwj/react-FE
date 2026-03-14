# 🛵 배달 주문 서비스 — React 프론트엔드

> **[delivery-app](https://github.com/6uiwj/delivery-app)** 백엔드 프로젝트의 프론트엔드 구현체입니다.

---

## 📌 프로젝트 소개

음식 주문 관리 플랫폼의 프론트엔드입니다.  
사용자(USER), 가게 사장님(OWNER), 관리자(MASTER/MANAGER) 권한에 따라 서로 다른 화면과 기능을 제공합니다.

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
react-FE/
├── api/          # 백엔드 API 호출 함수 모음
├── assets/       # 이미지, 아이콘 등 정적 리소스
├── pages/        # 페이지 컴포넌트
├── App.jsx       # 라우팅 및 앱 진입점
├── App.css       # 전역 스타일
├── main.jsx      # React DOM 렌더링
└── index.css     # 기본 CSS 리셋 / 전역 변수
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
