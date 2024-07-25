# 🍉 박수칠수박
<br/>


## 📌 github 규칙

- main에 커밋 금지(보호 걸어놓음, 메인 빌드용)
- 브랜치 네이밍 컨벤션 준수
  - 라벨/이슈 번호
  - `feat/CLAP-1, bug/CLAP-1, fix/CLAP-1, refactor/CLAP-1`
 
<br/>
  
## 📌 이슈 관리
  
- [JIRA 활용](https://watermelon-clap.atlassian.net/jira/software/projects/CLAP/boards/1)
   - 에픽을 스프린트 단위로 한다.
   - 스프린트는 1주일의 주기를 가진다.
   - 스프린트 시작 시 백로그에서 이번주에 진행할 작업을 가져와 스프린트에 채운다.
   - 스프린트 종료 시 회고를 통해 작업 진행속도 및 작업 분배에 대해 논의한다. 
   - 이슈 연결 기능을 사용하여 작업 간의 종속성을 명시한다.

<img width="800" alt="image" src="https://github.com/user-attachments/assets/b6e96953-96ed-4a26-a4be-3543d81a45d5">


<br/>

## 📌 커밋 컨벤션

### 기본 규칙: 
    
```
라벨명(이슈번호): 한 줄짜리 description `단, 개발 용어를 제외하고는 무조건 한글만 허용`

- 설명 1(최대한 자세하게)
- 설명 2
```

    
### 라벨 설명

```
feat: 새로운 기능 추가 및 삭제. 사용자가 조금이라도 변화를 감지할 수 있으면 무조건 feat로 분리.
fix: 버그 수정
refactor: feat와 fix를 제외한 모든 코드 수정
chore: 별로 중요하지 않은 변경 사항 `e.g., 파일명 변경, 폴더 구조 변경, 오타 수정, 주석 제거, etc.`
build: 빌드 관련 설정
config: 개발환경 관련 설정(프로젝트 초기 설정도 포함)
style: 코드  
res: 리소스 관련 (String, Color 등) 파일 `안드로이드 한정`
```
    
### 커밋 한번에는 100줄 이상의 변화를 넣지 않는다.

<br/>

## 📌 PR 규칙

- 상위 이슈 하나를 해결하면 PR로 올린다.
- PR을 기준으로 CI/CD가 작동하므로 타 패키지에 불필요한 수정을 하지 않는다.
- 최소 한명의 Reviewer을 설정한다.
- 해당 Reviewer의 Approve와 빌드 및 테스트 성공이 되었을 경우에만 Merge 가능


<br/>

## 📌 PR 템플릿

```
## 연관된 이슈

- ex) #이슈번호, #이슈번호

## 작업 내용

- 이번 PR에서 작업한 내용을 간략히 설명해주세요(이미지 첨부 가능)

## 리뷰어 멘션

- `@1번`, `@2번` 과 같이 부여한 리뷰어를 멘션해주세요(slack 알림을 위해)

## 스크린샷 (선택)

## 리뷰 요구사항(선택)

- 리뷰어가 특별히 봐주었으면 하는 부분이 있다면 작성해주세요

- ex) 메서드 XXX의 이름을 더 잘 짓고 싶은데 혹시 좋은 명칭이 있을까요?
```




<br/>

## 📌 코딩컨벤션

### Base
- prettier recommended 설정을 최대한 따라간다.
```
'eslint:recommended',
'plugin:@typescript-eslint/recommended',
'plugin:react-hooks/recommended',
'plugin:prettier/recommended',
```
- eslint와 prettier를 통합하여 사용한다.
- 모든 패키지에서 같은 eslint rule 및 convention을 가져간다.

### 폴더
- Monorepo 구조를 가진다.
```
├── admin // 관리자 페이지
├── core // 공통 라이브러리
└── service // 서비스 페이지
```
- src 내부는 공통 로직인 common 혹은 각 도메인 이름으로 된 폴더가 존재한다.
```
├── components
├── styles
├── constants
├── hooks
├── remotes
├── models
├── utils
└── pages
```


### 함수 컨벤션

- 화살표 함수를 사용한다.
- 함수의 파라미터에 대한 인터페이스는 상단에서 정의한다.
- 최대한 명료한 함수명을 사용한다.

### 모듈 컨벤션

- 다시 내보내기를 최대한 활용하여 추상화 수준을 높인다.
```
└── VirtualScrollBar
    ├── VirtualScrollBar.css.ts
    ├── VirtualScrollBar.tsx
    └── index.ts // 필요한 부분만 내보냄
```

- 하나의 파일에서는 하나의 함수만 내보낸다. (index 제외)
- 모든 내보내기를 export default 로 통일한다.


<br/>


## 📌 기술 선택 이유

 
- 배포 서비스로 firebase를 채택한 이유  
  -> 무료이고, GUI가 잘 구성되어있어 사용하기 쉽습니다. 추가적인 기능이 필요할 경우 gcp로 이전하기도 쉽습니다(gcp 기반)

- 프론트 레포지토리 내에 코어 패키지와 서비스 패키지가 있는데, 이 구조는 무엇이고, 왜 사용하셨나요?  
  -> 모노 레포 구조로, 추후 서비스 외의 다른 패키지가 추가될 경우 공통된 로직 및 인터페이스를 가집니다.

- npm이 아니라 pnpm을 쓰신 이유가 있나요? pnpm의 기능은 무엇인가요?  
  -> npm에 비해 속도가 빠르면서 yarn에 비해 안정적입니다. pnpm은 패키지 관리자로 기존의 패키지 관리자와 다르게 심볼릭 링크로 패키지를 연결합니다.

- emotion을 쓰셔서 그런지 몰라도 자바스크립트 코드가 길어 보입니다. 그럼에도 불구하고 emotion을 쓰신 이유가 있을까요?  
  -> css-in-js의 장점을 가져가고자 했습니다. 복잡한 스타일링 로직은 분리(*.css.ts)하면 됩니다.

- React-Query를 선택한 이유  
  -> 서버의 트래픽을 줄이고, 비동기 로직 처리를 효율적으로 수행하기 위해 사용하였습니다.

- 모노레포 구성을 채택한 이유  
  -> admin과 service 패키지가 나뉘어지면서 각각의 패키지에 필요한 모듈들을 독립적으로 관리하기 위해 사용했습니다. 또한 admin과 service를 각각 배포하면서 로직을 재사용하기 위해 채택했습니다.




<br/>


## 📌 기술적인 도전

### 모노레포 빌드 효율화
하나의 패키지에서 내용이 변경되었을 때 다른 패키지들까지 빌드되지 않도록 빌드 최적화

### Asset 로드 UX 향상
다량의 이미지를 한번에 로드할 때 시간이 지연되는데, 이 때 사용자의 UX를 향상시키기 위해 노력함

### 곡선을 따라 움직이는 SVG
곡선을 좌표를 수학적으로 계산하여 SVG 이미지를 곡선 경로를 따라 부드럽게 이동시키기

### 마우스 포인터 애니메이션
마우스 포인터 위치에 반응하는 화려한 애니메이션 보여주기


