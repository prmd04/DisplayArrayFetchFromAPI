function promiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const output = document.getElementById("output");
      output.innerHTML = `<tr><td colspan="2">Loading posts...</td></tr>`;

      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((res) => {
          output.innerHTML = "";
          res.posts.forEach((item) => {
            const row = document.createElement("tr");
            row.className = "row";
            row.innerHTML = `
              <td>Title: ${item.title}</td>
              <td>Body: ${item.body}</td>
            `;
            output.appendChild(row);
          });
          resolve();
        });
    }, 1000);
  });
}

function promiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const output = document.getElementById("output");
      output.innerHTML = `<tr><td colspan="2">Loading products...</td></tr>`;

      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
          output.innerHTML = "";
          res.products.forEach((item) => {
            const row = document.createElement("tr");
            row.className = "row";
            row.innerHTML = `
              <td>Title: ${item.title}</td>
              <td>Description: ${item.description}</td>
            `;
            output.appendChild(row);
          });
          resolve();
        });
    }, 2000);
  });
}

function promiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const output = document.getElementById("output");
      output.innerHTML = `<tr><td colspan="2">Loading todos...</td></tr>`;

      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((res) => {
          output.innerHTML = "";
          res.todos.forEach((item) => {
            const row = document.createElement("tr");
            row.className = "row";
            row.innerHTML = `
              <td>Todo: ${item.todo}</td>
              <td>Completed: ${item.completed}</td>
            `;
            output.appendChild(row);
          });
          resolve();
        });
    }, 3000);
  });
}

const loadData = document.getElementById("button");

loadData.addEventListener("click", () => {
  promiseAPI1()
    .then(() => promiseAPI2())
    .then(() => promiseAPI3());
});
