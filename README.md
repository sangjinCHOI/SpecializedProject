# 👉[나에게 딱 맞는 와인 추천 서비스, WIBLE](http://J6a303.p.ssafy.io/)👈

## 멤버

<!-- ![image](https://user-images.githubusercontent.com/28949166/154533716-08ba1ee2-21e0-417d-a338-5cc6552fcb65.png) -->

| 이름    | 김다영                                                                                                          | 김수민                                                                                                          | 김유민                                                                                                          | 염형덕                                                                                                          | 최상진                                                                                                          |
| ------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Profile | ![image](https://user-images.githubusercontent.com/28949166/154540445-ac05c003-dc6b-483a-bf05-2f0521535ea2.png) | ![image](https://user-images.githubusercontent.com/28949166/154540445-ac05c003-dc6b-483a-bf05-2f0521535ea2.png) | ![image](https://user-images.githubusercontent.com/28949166/154540445-ac05c003-dc6b-483a-bf05-2f0521535ea2.png) | ![image](https://user-images.githubusercontent.com/28949166/154540445-ac05c003-dc6b-483a-bf05-2f0521535ea2.png) | ![image](https://user-images.githubusercontent.com/28949166/154540445-ac05c003-dc6b-483a-bf05-2f0521535ea2.png) |
| Stack   | 백엔드 API 개발 & 추천 알고리즘                                                                                 | 김수민                                                                                                          | 김유민                                                                                                          | 백엔드 API 개발 & 서버 관리 및 배포                                                                             | 최상진                                                                                                          |
| Git     | [다영]()                                                                                                        | [다영]()                                                                                                        | [유민]()                                                                                                        | [형덕]()                                                                                                        | [상진]()                                                                                                        |

---

<!-- ![image](/uploads/c3c82af65799a3cf0427f55150237b96/image.png)
![image](/uploads/9337991ef1303da755aca4ac7645f6ae/image.png)
![image](/uploads/77613a0f236338964376a63b726f912e/image.png)
![image](https://user-images.githubusercontent.com/28949166/154533287-aff77690-1ac8-4d7e-9f0b-a3ee49c9b573.png)
![image](/uploads/c90fa73b6c14ddb10302995bf9fadccc/image.png) -->

---

## Development Stack

### **Front-end**

| <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React.js" width="50px" height="50px" /> | <img src="https://mui.com/static/logo.png" alt="MUI" width="50px" height="50px" /> |
| :-------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: |
|                                                               React                                                               |                                        MUI                                         |

### **Back-end**

| <img src="https://www.seekpng.com/png/full/8-80775_spring-logo-png-transparent-spring-java.png" alt="Spring-Boot" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" width="50px" height="50px" /> | <img src="https://media.vlpt.us/images/2012monk/post/86ce779f-a08b-438d-836c-8dbe6e5a8cc0/hibernate_icon_whitebkg.svg" alt="Hibernate" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" width="50px" height="50px" /> |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|                                                                   Spring-Boot                                                                   |                                                             Java                                                             |                                                                              Hibernate                                                                               |                                                             MySQL                                                              |

### **DevOps**

| <img src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg" alt="NGiNX" width="50px" height="50px" /> | <img src="https://pbs.twimg.com/profile_images/1351702967561252865/aXfcETIt_400x400.jpg" alt="aws" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" alt="docker" width="50px" height="50px" /> |
| :-------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
|                                                         NGiNX                                                         |                                                               aws                                                                |                                                              docker                                                              |

## Deployment Flow

![image](/uploads/8ecb9a71f5a13c7dd2f1537e1c4cf664/image.png)

---

## 설치 및 사용

### Github Clone

```
    git clone
```

### Frontend

- 시스템 버전

  - node : @16.13.0
  - npm : @8.1.0

- /frontend 디렉토리로 이동
- React 모듈 설치
  ```
    npm install
  ```
- /frontend/src/common/config/key에 reading_group.js 파일 생성해 아래 코드 추가

  ```
  const OPENVIDU_URL = "https://i6a305.p.ssafy.io:7443";
  const OPENVIDU_SECRET = "MY_SECRET";

  export { OPENVIDU_SECRET, OPENVIDU_URL };

  ```

- React 어플리케이션 실행
  ```
    npm start
  ```

### Backend

- 시스템 버전

  - JVM: AWS Corretto 11
  - mysql: 8.0.28

- 소스코드 pull

  ```
  git pull origin develop
  ```

- 빌드, 배포 스크립트 실행

  ```
  sh ~/S06P12A305/scripts/deploy.sh
  ```

---

## 개발 스프린트

| 스프린트                            | 기간                    | FE                                                                                                                                                                                                                                                | BE                                                                                                                                                                                                                                                                                       | DATA                                                                                                              |
| ----------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 프로젝트 기획 & git, Jira 전략 모색 | 2022.02.21 - 2022.03.04 | <ul><li>Figma를 이용한 와이어프레임 작성</li><li> 프로젝트 기획</li></ul>                                                                                                                                                                         | <ul><li>ERD 설계• 파일구조 설계</li><li>코딩 컨벤션 정의• 프로젝트 기획</li></ul>                                                                                                                                                                                                        |                                                                                                                   |
| 기본 기능 개발                      | 2022.03.07 - 2022.03.18 | <ul><li>회원가입</li><li>로그인, 로그아웃</li><li>회원정보 조회, 수정</li><li>메인 페이지 구현</li><li>검색 페이지 구현</li><li>마이페이지 구현</li><li>와인 상세페이지 구현</li><li>음식 추천 페이지 구현</li><li>와인 상식 페이지구현</li></ul> | <ul><li>회원가입 API 개발</li><li>로그인 API 개발</li><li>회원정보 수정 API 개발</li><li>인기 와인 API 개발</li><li>와인 검색 API 개발</li><li>와인 평가 API 개발</li><li>좋아요 API 개발</li><li>와인 상세정보 API 구현</li><li>와인 상식 API 개발</li><li>음식 추천 API 개발</li></ul> | -                                                                                                                 |
| 데이터 크롤링 및 데이터 전처리      | 2022.03.21 - 2022.03.25 | -                                                                                                                                                                                                                                                 | <ul><li>AWS 설정 및 빌드</li></ul>                                                                                                                                                                                                                                                       | <ul><li>셀레니움을 이용한 데이터 크롤링</li><li>데이터 전처리</li></ul>                                           |
| 빅데이터 기반 와인 추천기능 개발    | 2022.03.28 - 2022.04.05 | -                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                        | <ul><li>클러스터링 알고리즘 구현</li><li> 와인 종류별 클러스터링 진행</li><li>클러스터링 데이터 DB 삽입</li></ul> |
| UCC 제작 및 발표 준비               | 2022.04.06 - 2022.04.07 | <ul><li>발표 준비</li><li> 발표 리허설</li><li> UCC 제작</li><li> 산출물 정리</li></ul>                                                                                                                                                           | -                                                                                                                                                                                                                                                                                        | -                                                                                                                 |
