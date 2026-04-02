fetch("../data/projetos.json")
    .then(response => response.json())
    .then(dados => {

        const container = document.getElementById("container-projetos");

        dados.projetos.forEach(projeto => {

            // CRIAR CARD
            const card = document.createElement("div");
            card.classList.add("card"); // usa o CSS que você já tem

            // TITULO
            const titulo = document.createElement("h2");
            titulo.textContent = projeto.nome;

            // DESCRIÇÃO
            const descricao = document.createElement("p");
            descricao.textContent = projeto.descricao;

            // TECNOLOGIA
            const tecnologia = document.createElement("p");
            tecnologia.textContent = "Tecnologia: " + projeto.tecnologia;

            // BOTÃO (OBRIGATÓRIO)
            const botao = document.createElement("a");
            botao.textContent = "Ver no GitHub";
            botao.href = projeto.github;
            botao.target = "_blank";

            // ADICIONAR NO CARD
            card.appendChild(titulo);
            card.appendChild(descricao);
            card.appendChild(tecnologia);
            card.appendChild(botao);

            // ADICIONAR NO CONTAINER
            container.appendChild(card);

        });

    })
    .catch(erro => {
        console.error("Erro ao carregar JSON:", erro);
        console.log("JS funcionando");
    });