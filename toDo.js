
fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    for(let key in data){
      let content = document.getElementById("ToDOList");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox"
      checkbox.className ="cb01"
      ListEl =document.createElement('li');
      ListEl.className ="list"
      user = document.createElement('div');
      titleEl = document.createElement('div');
      titleEl.className ="titles"
      completeEL = document.createElement('div');
      user.innerHTML = `User :${data[key].userId}`;
      titleEl.innerHTML =`${data[key].title}`
      completeEL.innerHTML =`${data[key].completed}`
      content.appendChild(ListEl);
      ListEl.appendChild(user);
      ListEl.appendChild(titleEl);
      ListEl.appendChild(checkbox);
      ListEl.appendChild(completeEL)
    }
    });
  







  

