fetch("/api/alunos")
  .then((response) => response.json())
  .then((alunos) => {
    const table = document.createElement("table");

    const header = table.insertRow();
    header.innerHTML = "<th>Nome</th><th>Curso</th><th>IRA</th>"

    let somaIra = 0;

    alunos.forEach((aluno) => {
      const linha = table.insertRow();
      linha.insertCell().textContent = aluno.nome;
      linha.insertCell().textContent = aluno.curso;
      linha.insertCell().textContent = aluno.ira;
      somaIra += aluno.ira;
    });

    const media = somaIra / alunos.length;
    document.getElementById("media").textContent =
      "Média dos iras da turma: " + media.toFixed(2) + "!";

    document.getElementById("container").appendChild(table);
  })
  .catch((error) => {
    console.error("Erro ao processar os alunos:", error);
    document.getElementById("media").textContent =
      "Erro ao processar os dados dos alunos."
  })