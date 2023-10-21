//API_KEY
const conf = "./apikey.js";
const API_KEY = conf.apikey;

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const inputInitHeight = chatInput.scrollHeight; //.scrollHeight 오버플로로 숨겨진 콘텐츠를 포함하여 콘텐츠 높이 측정

//createChatLi
const createChatLi = (msg, className) => {
  const chatLi = document.createElement("li"); //<li>요소 만들기
  chatLi.classList.add("chat", className); //chatLi className을 chat으로 지정

  let chatContent =
    className === "outgoing"
      ? `<p></p>` //true : <p></p>요소
      : `<span><i class="fa-solid fa-robot"></i></span><p></p>`; //false : icon요소
  chatLi.innerHTML = chatContent; //true & false에 해당하는 요소를 넣기
  chatLi.querySelector("p").textContent = msg; //chatLi에 p요소에 msg 내용 넣기
  return chatLi;
};

//generateResponse --> chatBot
async function generateResponse(incomingChatLi) {
  const messageElement = incomingChatLi.querySelector("p");

  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
        model: "gpt-3.5-turbo",
        message: [{ role: "user", content: userMessage }],
      }),
    };

    console.log(messageElement);
    const res = await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    );

    const data = await res.json();
    console.log(data);
    messageElement.textContent = data.choices[0].message.content;
    chatBox.scrollTo(0, chatBox.scrollHeight);
  } catch (err) {
    messageElement.textContent = `OMG! error...`;
    console.error(err);
  }

  return data;
}

//handleChat
//사용자가 chatBot에게 message보냈을 때의 함수
const handleChat = () => {
  //아니면 공백여러개를 공백하나로 치환해서 보내도 될것같아요
  userMessage = chatInput.value.trim(); //모든 공백을 제거
  if (!userMessage) {
    //{}
    return;
  }
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatBox.appendChild(createChatLi(userMessage, "outgoing"));
  chatBox.scrollTo(0, chatBox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatBox.appendChild(incomingChatLi);
    chatBox.scrollTo(0, chatBox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

/**
 * EventListener
 */
chatInput.addEventListener("keydown", (e) => {
  //e.shiftKey : 키가 눌렸는지(), 누르지 않았는지()
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);

//chatbot click --> show-chatbot
chatbotToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot"); //toggle : add, remove
});

/**
 * 필요여부 => x
 */
chatInput.addEventListener("input", () => {
  //input textarea 내용을 조절하기
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

//chatbotCloseBtn click -->
chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
