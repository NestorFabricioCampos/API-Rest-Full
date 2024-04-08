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
              <h5 class="ContenedorArticulo-title">${article.title}</h5>
              <h5 class="ContenedorArticulo-title">userId: ${article.userId}</h5>
              <p class="ContenedorArticulo-text">id: ${article.id}</p>
              <p class="ContenedorArticulo-text">title: ${article.title}</p>
              <p class="ContenedorArticulo-text">Completado: ${article.completed}</p>
            </div>
          `;
          articlesList.appendChild(ContenedorArticulo);
        });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  
