## **📖** 주제

- SSAFY 교육생을 위한 커뮤니티

## **💬** 요약

- 문제: 한 번도 접점이 없던 전공자와 비전공자가 팀을 이뤄서 프로젝트를 진행해야 했습니다. 아무런 정보가 없는 사람끼리 팀을 이루니 팀원 사이의 불화가 빈번하게 일어나는 문제가 있었습니다.

- 해결방안:
    1. 프로젝트를 시작하기 전에 미리 전공자와 비전공자가 만날 수 있는 자리를 만들어서 문제를 해결했습니다.

## **🔧**주요 기능

1. 금요일에 만나기 위한 미팅방
2. 약속 장소를 정하기 위한 채팅
3. 커피내기를 위한 미니게임
4. 커뮤니티 게시판

## **🎨** 화면 설계서

### 랜딩 페이지

![image](https://github.com/sksn12/candy/assets/61752860/55006ad2-6f5e-4346-a869-01de9ea7de06)

### 로그인 페이지

![image](https://github.com/sksn12/candy/assets/61752860/f0496626-639e-4cd8-9e4e-07abd367d568)

### 약관 동의

![image](https://github.com/sksn12/candy/assets/61752860/6d36e64a-671f-4b05-b0ee-5b05c2812b71)

### 에듀 싸피 인증

![image](https://github.com/sksn12/candy/assets/61752860/53b01a76-5e62-4dc8-b5ae-79e482efd1f5)

### 회원가입 페이지

![image](https://github.com/sksn12/candy/assets/61752860/1be70e32-b668-4dce-86db-fd81456b404e)

### 미팅 메인 페이지

![image](https://github.com/sksn12/candy/assets/61752860/9b94329d-f1e1-418b-b558-b1fb35b7d717)

### 버튼 활성화

![image](https://github.com/sksn12/candy/assets/61752860/37ae44e5-210b-4a32-ab6c-480be4bf5cdb)

### 게임 or 미팅 방 생성

![image](https://github.com/sksn12/candy/assets/61752860/e312e4b6-2a13-4f07-a17e-18e4018f2f5e)

![image](https://github.com/sksn12/candy/assets/61752860/f031acee-ecdb-49c6-99e3-d2efe6e96cb9)

### 미팅 방 참여 및 채팅

![image](https://github.com/sksn12/candy/assets/61752860/fc2e6a8c-982a-4f98-853a-0e81bcb2aac1)

![image](https://github.com/sksn12/candy/assets/61752860/1321dd45-cb43-4880-ace6-cb6a5c8ce04d)

![image](https://github.com/sksn12/candy/assets/61752860/03176b62-3c62-47aa-9682-b7ec38476984)

### 게임 실행

![image](https://github.com/sksn12/candy/assets/61752860/b6cb34e8-463e-4436-a31d-9ee6d7892983)

![image](https://github.com/sksn12/candy/assets/61752860/567b4678-44ae-44ea-9fef-520d1e82d77b)

![image](https://github.com/sksn12/candy/assets/61752860/7bbfd4c6-9f6f-47e9-bfb4-f9a45be92c9a)

![image](https://github.com/sksn12/candy/assets/61752860/140f2b4a-94a9-48c3-a555-dedaa278dab3)

### 마이 페이지

![image](https://github.com/sksn12/candy/assets/61752860/ae999342-9686-4ab5-ad02-eb6b046cd703)

![image](https://github.com/sksn12/candy/assets/61752860/a0de5602-294a-43a2-8dd1-922d92befdbf)

### 커뮤니티 메인 페이지

![image](https://github.com/sksn12/candy/assets/61752860/2d262984-3c44-40fa-98ef-d6816b49fe87)

![image](https://github.com/sksn12/candy/assets/61752860/f851ecba-224f-45a9-a374-5f95ec9e8e87)

---

## **⚙** 아키텍쳐

![아키텍쳐](https://github.com/sksn12/candy/assets/61752860/8c18c696-e113-4a97-89e8-1e317ef48695)

---

---

## **📝** ERD

![fri (2)](https://github.com/sksn12/candy/assets/61752860/dbb989c2-67eb-442d-bbc2-f7bc3e028c78)

---

---

## **🛠** 주요 기술

### 백

- openJDK 11
- IntelliJ IDE
- Springboot 2.7.10
- Spring Data JPA
- ~~Spring Security~~
- Spring Web
- Selenium
- WebSocket: Stomp
- MariaDB: server 10.6.12

### 인프라

- EC2
- Docker
- Jenkins
- Nginx
- S3

### 프론트

- VsCode
- Node.js 18.16.0
- React 18.2.0
- Redux ToolKit 1.9.5
- Redux-Persist 6.0.0
- SASS 1.62.0

---

---

## 프로젝트 빌드

### 백

- 로컬: back/src/resources/application.yml을 아래 내용으로 수정 후 실행

### 프론트

- 최상위 폴더 (/)에 .env 파일 생성 후 카카오API키 입력

```
REACT_APP_KAKAO_API_KEY = '7c01e88163ab50f09cc5f765bf7f5037'
```

---

---

## **🛠** 협업 툴

- Git
- Notion
- Jira
- Discord
- Figma

---

---

## **🛠** 협업 환경

### Git

- 코드 버전을 관리

### Notion

- 회의가 있을 때 마다 회의록을 기록해 보관
- 기술 공부 시 문서를 작성해 팀원과 공유
- 같은 버그 발생 시 빠른 해결을 위해 디버깅 내역을 기록
- 기능명세서, ERD, REST API 등 모두가 공유해야하는 문서 관리
- 컨벤션 정리
- 간트차트 관리

### Jira

- 매주 목표량을 설정해 Sprint 진행
- 업무의 할당량을 정해 Story Point를 설정하고, In-Progress → Done 순으로 작업

### Discord

- 화면 공유로 팀원간 원활한 비대면 소통

### Figma

- 화면 설계서 작성

---

---

## 📄 시연 시나리오

### 회원가입

![image](https://github.com/sksn12/candy/assets/61752860/f0496626-639e-4cd8-9e4e-07abd367d568)

![image](https://github.com/sksn12/candy/assets/61752860/6d36e64a-671f-4b05-b0ee-5b05c2812b71)

![image](https://github.com/sksn12/candy/assets/61752860/53b01a76-5e62-4dc8-b5ae-79e482efd1f5)

![image](https://github.com/sksn12/candy/assets/61752860/1be70e32-b668-4dce-86db-fd81456b404e)

1. 로그인 페이지에서 회원가입 버튼을 클릭한다.
2. 회원가입 전 약관동의를 사용자에게 받는다.
3. 에듀싸피 이메일 인증을 위해 이메일을 받아 셀레니움으로 에듀싸피에서 검증한다.
4. 이메일 인증을 하기 위해 입력받은 이메일로 코드를 발송하여 발송한 코드와 값이 일치하는지 비교하고 일치한다면 검증완료 한다.
5. 기수,지역,이름 등 회원가입을 위한 여러 형식을 입력받는다.
6. 회원 가입을 완료한다.

---

### 미팅 방 생성 및 미팅 방 사용

![image](https://github.com/sksn12/candy/assets/61752860/9b94329d-f1e1-418b-b558-b1fb35b7d717)

![image](https://github.com/sksn12/candy/assets/61752860/37ae44e5-210b-4a32-ab6c-480be4bf5cdb)

![image](https://github.com/sksn12/candy/assets/61752860/e312e4b6-2a13-4f07-a17e-18e4018f2f5e)

![image](https://github.com/sksn12/candy/assets/61752860/f031acee-ecdb-49c6-99e3-d2efe6e96cb9)

![image](https://github.com/sksn12/candy/assets/61752860/fc2e6a8c-982a-4f98-853a-0e81bcb2aac1)

![image](https://github.com/sksn12/candy/assets/61752860/1321dd45-cb43-4880-ace6-cb6a5c8ce04d)

![image](https://github.com/sksn12/candy/assets/61752860/03176b62-3c62-47aa-9682-b7ec38476984)

1. 메인 페이지에서 하단에 위치하는 버튼을 활성화하여 +버튼을 누른다.
2. 어떤 방을 생성할 지 카테고리를 선택하여 제목과 인원수 등 필요한 정보를 받아 방을 생성한다.
3. 방을 생성하면 소켓 통신이 연결되어 방에 입장하는 다른 사용자들과 실시간 채팅이 가능해진다.
4. 우측 상단에 리스트 아이콘을 클릭하면 현재 참여자들 목록이 확인 가능해지며 방을 나갈 수 있다.

---

### 다른 사용자들과 실시간 미니게임

![image](https://github.com/sksn12/candy/assets/61752860/b6cb34e8-463e-4436-a31d-9ee6d7892983)

![image](https://github.com/sksn12/candy/assets/61752860/567b4678-44ae-44ea-9fef-520d1e82d77b)

![image](https://github.com/sksn12/candy/assets/61752860/7bbfd4c6-9f6f-47e9-bfb4-f9a45be92c9a)

![image](https://github.com/sksn12/candy/assets/61752860/140f2b4a-94a9-48c3-a555-dedaa278dab3)

1. 게임 방을 생성하거나 참여하면 소켓통신을 연결하여 다른 사용자들과 실시간 데이터를 주고 받을 수 있어 모든 사용자들이 준비완료 버튼을 누름과 동시에 게임이 시작된다.
2. 게임이 시작되고 3초후 랜덤한 시간을 사용자들에게 보여주며 사용자는 랜덤한 시간에 가깝게 계란을 한번 클릭한다.
3. 모든 참여자들의 stop시간을 비교하여 랜덤 시간과 가장 일치하는 순으로 등수를 매긴다.
4. 모든 참여자들이 방을 나가게되면 게임 방을 삭제된다.

---

### 마이 페이지

![image](https://github.com/sksn12/candy/assets/61752860/ae999342-9686-4ab5-ad02-eb6b046cd703)

![image](https://github.com/sksn12/candy/assets/61752860/a0de5602-294a-43a2-8dd1-922d92befdbf)

1. 마이페이지에서 유저의 이름,닉네임, 프로필 사진등이 표기된다.
2. 프로필 수정버튼을 클릭하면 사용자의 프로필 사진과 닉네임을 변경할 수 있다.

---

### 커뮤니티 페이지

![image](https://github.com/sksn12/candy/assets/61752860/2d262984-3c44-40fa-98ef-d6816b49fe87)

![image](https://github.com/sksn12/candy/assets/61752860/f851ecba-224f-45a9-a374-5f95ec9e8e87)

![image](https://github.com/sksn12/candy/assets/61752860/d327fc7e-bb18-4e84-a636-ba6d31bfd540)

1. 각 카테고리 별로 게시글 리스트가 나오며 이미지 썸네일과 좋아요 수 등이 표시된다.
2. 하나의 게시글을 클릭하면 해당 게시글 상세 정보가 나온다
3. 해당 게시글에서 좋아요를 누르거나 댓글을 입력, 해당 게시글 스크랩을 할 수 있다.
4. 게시글을 작성 할 수 있으며 카테고리를 선택 하고 최대 5장의 사진과 내용 타이틀을 입력할 수있다.

---

## **🗓** 프로젝트 진행 기간

`2023.04.10 ~ 2023.05.19 (약 7주)`

---

---

## **💾** 포팅 매뉴얼

| 포트 | 유형 | 프로그램        | 사용포트내용                              |
| ---- | ---- | --------------- | ----------------------------------------- |
| 22   | TCP  | SSH             | Ubuntu 접속을 위해                        |
| 80   | TCP  | HTTP            | HTTP 기본 Port                            |
| 443  | TCP  | HTTPS           | HTTPS 기본 Port                           |
| 3000 | TCP  | DOCKER, REACT   | fri_front_container의 react port          |
| 3306 | TCP  | DOCKER, MariaDB | MariaDB server Port                       |
| 8080 | TCP  | DOCKER, Spring  | fri_back_container의 Spring 운영 Port     |
| 8733 | TCP  | DOCKER, Spring  | fri_back_container_dev의 Spring 개발 Port |
| 9090 | TCP  | DOCKER, Jenkins | Jenkins Port(8080 → 9090)                 |

---

---

## **❤️** 팀원

### 프론트

[eunnu - Overview](https://github.com/eunnu)

[BaeSeongHyeon97 - Overview](https://github.com/BaeSeongHyeon97)

### 백

[hagnoykmik - Overview](https://github.com/hagnoykmik)

[Gukss - Overview](https://github.com/Gukss)

[sksn12 - Overview](https://github.com/sksn12)

[JeongBeomi - Overview](https://github.com/JeongBeomi)
