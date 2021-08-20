let input = document.getElementById("input");
let add = document.getElementById("add");
let todos = document.getElementById("todos");
let notask = document.getElementById("notask");
let done = document.getElementById("done");
let notdone = document.getElementById("notdone");
let ul = document.getElementById("ul");
let lis = [];

let countDone = 0;
let countNotDone = 0;

// button add todos

add.addEventListener("click", () => {
  notask.style.display = "none";
  let li = document.createElement("li");
  li.classList.add("li");
  li.textContent = input.value;
  input.value = "";
  let sup = document.createElement("button");
  sup.textContent = "X";
  sup.classList.add("sup");

  li.appendChild(sup);
  ul.appendChild(li);

  countNotDone++;
  notdone.textContent = "Not Yet: " + countNotDone;
  lis.push(li);

  //Delete task Button
  sup.addEventListener("click", () => {
    lis.length--;

    if (lis.length == 0) {
      notask.style.display = "block";
      todos.style.overflowY = "hidden";
      console.log(notask);
    }
    event.stopPropagation();
    if (li.classList.contains("under")) {
      li.remove();
      countDone--;
      done.textContent = "Done: " + countDone;
    } else {
      li.remove();
      countNotDone--;
      notdone.textContent = "Not Yet: " + countNotDone;
    }
  });

  //increment Done/Not Yet tasks
  li.addEventListener("click", () => {
    li.classList.toggle("under");
    if (li.classList.contains("under")) {
      countDone++;
      done.textContent = "Done: " + countDone;
      countNotDone--;
      notdone.textContent = "Not Yet: " + countNotDone;
    } else {
      countDone--;
      done.textContent = "Done: " + countDone;
      countNotDone++;
      notdone.textContent = "Not Yet: " + countNotDone;
    }
  });

  // add scroll when number of tasks is greater than 5
  if (lis.length > 5) {
    todos.style.overflowY = "scroll";
  }
});
