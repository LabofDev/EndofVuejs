<img src="./images/vue-advanced.png" width="80%"/>

## 1. Study Agenda
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-1.init`**
- summary
  - 강좌에서 개발할 웹어플리케이션에 대해서 확인하고 일반적인 웹개발 절차와 API 문서에 대해서 알아본다.
### 1.1 Introduce Application
  - `회원가입`, `로그인`, `CRUD`가 발생하는 기본적인 웹어플리케이션
### 1.2 Procedure of Front-End Development
- 웹 개발 절차
  - 요구사항 > 서비스 기획 > UI, UX 상세 설계 > GUI 디자인 > 퍼블리싱 > Back-End API 개발 > Front-End 개발 > QA
- Front-End 개발자의 역할
  - Client UI에 대한 코드 작성
  - 기획, 디자인, 퍼블리싱, Back-End 개발자와 소통
### 1.3 Document of API
- [Swagger UI](https://swagger.io/)
  - [Swagger](https://ko.wikipedia.org/wiki/%EC%8A%A4%EC%9B%A8%EA%B1%B0_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4))는 개발자가 RESTfull API를 설계, 빌드, 문서화, 소비하는 일을 도와주는 오픈소스 소프트웨어 프레임워크

## 2. Configuration of Development Environment
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-2.environment`**
- summary
  - 개발환경 구성에 대해서 알아본다(깃허브, 필수 설치 프로그램, )
### 2.1 개발 환경(Tools)
  - [Chrome](https://www.google.com/intl/ko/chrome/), [Git](https://git-scm.com/downloads), [Visual Studio Code](https://code.visualstudio.com/), [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/), [Vue.js Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - Github
    - [개발 소스(Front-End) - Source](https://github.com/joshua1988/vue-til), [API(Back-End) - Source](https://github.com/joshua1988/vue-til-server)
  - VS Code Plugin
    - 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
    - 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
    - 뷰 확장 플러그인 : [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
    - 뷰 코드 스니펫 : [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
    - 문법 검사 : [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
    - 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    - 기타
      - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등

### 2.2 개발 환경 (Visual Studio Code Gitbash Terminal)
- [git bash](https://git-scm.com/downloads)는 Windows에서도 Linux 명령어를 사용할 수 있는 환경
- Visual Studio Code에서도 `gitbash` 터미널을 사용할 수 있다.(본 강좌에서는 사용해야 함)
- 기존의 `terminal.integrated.shell.windows`에 대해서 VSCode 업데이트 됨에 사용할 수 없음([참고](https://code.visualstudio.com/updates/v1_56))
- `Visual Studio Code` > `ctrl + ,` > `terminal.integrated.shell.windows` > `setting.json` open > 하기의 코드 추가
```json
"terminal.integrated.profiles.windows": {
    "GitBash": {
        // 일반적으로 : "C:\\Git\\bin\\bash.exe"
        "path":["사용자별 git 설치 경로\\bash.exe"],
        "icon":"terminal-bash"
    },

    "PowerShell": {
        "source": "PowerShell",
        "icon": "terminal-powershell"
    },
    "Command Prompt": {
        "path": [
            "${env:windir}\\Sysnative\\cmd.exe",
            "${env:windir}\\System32\\cmd.exe"
        ],
        "args": [],
        "icon": "terminal-cmd"
    },


},
// "GitBash"로 설정하면 "Bash"가 기본으로 설정 됨
"terminal.integrated.defaultProfile.windows": "Command Prompt",
```

### 2.3 개발 환경(Node js)
- Node 버전 확인 및 업그레이드 & 다운그레이드
  - 본 강좌의 소스는 `node` 버전이 `v10.16.3`으로 진행해야 함
  - 특정 버전의 Node를 설치하는 방법은 2가지
    - *원하는 LTS 버전을 찾아 해당 OS의 실행 파일로 설치 (GUI로 사용)*
    - *NVM을 사용하여 특정 버전 설치 사용등 (Command Line으로 사용)*
  ```command
  $ node -v
  v14.8.1
  ```
  - [Node js - v10.16.3](https://nodejs.org/download/release/v10.16.3/)에서 OS 버전에 맞는 파일을 다운로드 받아 설치 가능
- NVM(Node Version Manager)
  - NVM을 이용하여 `nodejs` 특정 버전을 설치, 업그레이드 및 다운그레이드 가능
  - [Node js](https://nodejs.org/ko/)
  - [NVM Github](https://github.com/nvm-sh/nvm)
  - `NVM` 설치
    - [NVM 설치 및 버전 변경 절차 문서](https://github.com/joshua1988/vue-til-server#nvm-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EB%B2%84%EC%A0%84-%EB%B3%80%EA%B2%BD-%EB%B0%A9%EB%B2%95)
    - `VSCode` > 터미널을 `Bash`로 열고 하기 명령어 입력
    ```command
    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
  - NVM 명령어 등록
    - `VSCode` > 터미널을 `Bash`로 열고 하기 명령어 입력
    ```command
    $ vi ~/.bashrc
    
    // i : 쓰기모드 진입
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    // esc : 쓰기모드 해지
    // :wq : 저장하고 종료 (:q : 저장하지 않고 종료)
    ```
    - `bash` 터미널에서 하기 명령어를 입력하여 정상적으로 `NVM`이 설치 및 명령어가 적용되었는지 확인
    ```command
    $ nvm --version
    0.39.0
    ```
    - 노드 버전을 그냥 전환하고 싶다면  `nvm use 버전 이름` 사용
    - [nvm 노드 버전 설치 가이드](https://www.inflearn.com/questions/281892)
    - `node` 버전 `10.16.3` 설치
    ```command
    $ nvm install 10.16.3

    Downloading and installing node v10.16.3...
    Downloading https://nodejs.org/dist/v10.16.3/node-v10.16.3-win-x64.zip...
    ################################# 100.0% 
    Computing checksum with sha256sum
    Checksums matched!
    Now using node v10.16.3 (npm v6.9.0)
    Creating default alias: default -> 10.16.3 (-> v10.16.3)

    $ node -v
    v10.16.3
    ```
    - `vue-til-server > package.json` 파일내 패키지 설치를 위한 명령어 실행
    ```command
    $ npm i
    ```
    - `npm run dev`로 서버 실행
    ```command
    $ npm run dev

    ...중략...

    VUE TIL SERVER IS RUNNING ON 3000
    // '3000'에 대한 포트를 사용중이면 하기에서 변경 가능
    // src > app.js > port 번호 수정
    ```
    - `http://localhost:3000/api/docs`로 접속하여 API 서버 확인
### 2.4 개발 환경(MongoDB)
- [MongoDB Site](https://www.mongodb.com/cloud)
- `src > app.js`의 `const db`에서 하기의 생성된 DB를 연결
- <img src="./images/2.4 MongoDB.png" width="100%"/>
- `bash` command > `npm run dev` > Server 기동 > `http://localhost:3000/api/docs` 접속 > /signup API Test
- <img src="./images/2.4 API Test.png" width="100%"/>
### 2.5 개발 환경(Swagger UI API)
- `Node js`로 작서된 `Back-End API` 코드를 `Front-End` 개발자와 `커뮤니케이션`하기 위한 API UI
- `RESTfull API`를 직접 테스트 할 수 있는 API UI
### 2.6 개발 환경(프로젝트 구성)
- vue --version 으로 vue/cli 버전 확인





## 3. Router & Design of Component
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-3.router_component`**
- summary
## 4. Development of Member Register
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-41.dev_member`**
- summary
## 5. Configuration of Project
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-5.configure`**
- summary
## 6. Development of Login
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-6.dev_login`**
- summary
## 7. Store & Login State Management
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-7.store_state`**
- summary
## 8. API Authentication by Token
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-8.api_auth_token`**
- summary
## 9. Development of Retrieve Note Data
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-9.dev_retrieve`**
- summary
## 10. Management of Authentication Value using Browser Storage
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-10.mgmt_auth_browser_storage`**
- summary
## 11. Development of Create Note Data
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-11.dev_create`**
- summary
## 12. Middle Adjustment
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-12.middle_adj`**
- summary
## 13. API Function Modularity
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-13.api_modularity`**
- summary
## 14. Development of Delete Note Data
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-14.dev_delete`**
- summary
## 15. Development of Modify Note Data
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-15.dev_modify`**
- summary
## 16. Data Formatting
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-16.data_format`**
- summary
## 17. Router Advanced
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-17.router_adv`**
- summary
## 18. Introduce of Front-End Testing
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-18.front_end_test`**
- summary
## 19. End of
- [Github](https://github.com/LabofDev/Vue.git) Branch Name : **`vue-endofvue-19.end`**
- summary
