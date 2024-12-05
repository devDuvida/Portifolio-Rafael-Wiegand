<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfólio da Eduarda - Desenvolvedora Full Stack</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
    <h1 id="titulo">Eduarda</h1>
    <h2>Desenvolvedora Full Stack</h2>
    <p id="descricao">Transformando ideias em realidade através da tecnologia.</p>
  </header>
  <main>
    <section id="sobre">
      <h2>Sobre Mim</h2>
      <p id="sobre-texto">Sou uma desenvolvedora full stack apaixonada por criar soluções inovadoras e eficientes.</p>
    </section>
    <section id="habilidades">
      <h2>Habilidades</h2>
      <ul id="habilidades-lista">
        <li>HTML, CSS, JavaScript</li>
        <li>React, Angular, Vue.js</li>
        <li>Node.js, Express, MongoDB</li>
        <li>Python, Django, Flask</li>
        <li>Git, Docker, RESTful APIs</li>
      </ul>
    </section>
    <section id="projetos">
      <h2>Projetos</h2>
      <div class="projeto">
        <h3 id="projeto-1-titulo">Projeto 1</h3>
        <p id="projeto-1-descricao">Descrição do projeto 1.</p>
        <a href="(link unavailable)" target="_blank" id="projeto-1-link">Ver Projeto</a>
      </div>
      <!-- Adicione mais projetos aqui -->
    </section>
    <section id="contato">
      <h2>Contato</h2>
      <p id="contato-texto">Se você deseja entrar em contato, sinta-se à vontade para me enviar um e-mail!</p>
      <form id="contato-form">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>
        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" required></textarea>
        <button type="submit" id="enviar-btn">Enviar</button>
      </form>
    </section>
  </main>
  <footer>
    <p>&copy; 2023 Eduarda. Todos os direitos reservados.</p>
    <p id="rede-social">Conecte-se comigo: 
      <a href="(link unavailable)" target="_blank">GitHub</a> | 
      <a href="(link unavailable)" target="_blank">LinkedIn</a>
    </p>
  </footer>
  <script src="script.js"></script>
</body>
</html>