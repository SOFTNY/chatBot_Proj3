//https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/

//직렬화한 경우
const person = [
  { id: 1, name: "Kim", age: 20 },
  { id: 2, name: "Lee", age: 30 },
  { id: 3, name: "Park", age: 40 },
];

const jsonString = JSON.stringify(person);

//결과
/*
[
  {"id":1,"name":"Kim","age":20},
  {"id":2,"name":"Lee","age":30},
  {"id":3,"name":"Park","age":40}
]
 */
