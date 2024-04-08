document.addEventListener("DOMContentLoaded", function() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        const articlesList = document.getElementById("articles-list");
  
        data.forEach(article => {
          const ContenedorArticulo = document.createElement("div");
          ContenedorArticulo.classList.add("card");
          ContenedorArticulo.innerHTML = `
            <div class="ContenedorArticulo-body">
              <h5 class="ContenedorArticulo-title">${data.title}</h5>
              <h5 class="ContenedorArticulo-title">userId: ${data.userId}</h5>
              <p class="ContenedorArticulo-text">id: ${data.id}</p>
              <p class="ContenedorArticulo-text">title: ${data.title}</p>
              <p class="ContenedorArticulo-text">Completado: ${data.completed}</p>
            </div>
          `;
          articlesList.appendChild(ContenedorArticulo);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  