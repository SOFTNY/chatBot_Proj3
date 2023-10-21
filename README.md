<h1 align="center">🤖ChatBot</h1>
<br>
<p align="center">
유소프 스터디에서 진행하고 있는 소소하고 소박한 프로젝트입니다.<br>
해당하는 주제에 각자 자바스크립트로 기능들을 구현해보며<br> 
완성하는 것을 목적으로 하고있습니다.<br>
</p>
<br>
<br>

<div align="center">
📌3주차 주제 : 자유롭게 구현<br> 
3주차 주제는 자유롭게 만들고 싶은 것을 구현하는 것이다.<br>
api를 활용해 만들어 보고 싶어서 ChatBot의 주제를 정하게 되었다.<br>
api를 통해 chat-gpt에서 제공하고 있는 OpenAi Key를 통해 챗봇과 대화할 수 있다.

<br>
<br>
<br>

📌기능<br>
async-await<br>
EventListener<br>
API => url, key가져오기
</div>

<br>
<br>

## 🚨Result [error : expire openai]
![Create Working Chatbot](https://github.com/SOFTNY/chatBot_Proj3/assets/111892963/fe8351fe-b626-43de-b13e-715e7ac9a8b1)
<br>
<br>

## ⌛개발 기간
23.10.16(월) ~ 23.10.21(토)
<br>
<br>

## ⚙️Installation
```
//Node.js에서 chatGPT-3.5 Fine-tuning하기
npm install openai
```
<br>
<br>

## 📌Main Function
#### Async-Await API
```javascript

async function funcName() {
    try{
      const res = await fetch('url');
      const data = await res.json();
      
    } catch (err) {
      console.log(err);
    }
  }
```
<br>


<h4>async와 await 비동기 처리</h4>

- try-catch 처리
- 에러 위치 찾기 쉬움 
- 코드 가독성 높음
- 에러 핸들링 유리








