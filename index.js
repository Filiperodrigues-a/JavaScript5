let pessoas = [];

        function curtir() {
            const nome = document.getElementById("nome").value.trim();

            
            if (nome && !pessoas.includes(nome)) {
                pessoas.push(nome);
            }
            atualizarLista();
        }
        function atualizarLista() {
            const listaCurtidas = document.getElementById("listaCurtidas");

            if (pessoas.length === 0) {
                listaCurtidas.textContent = "Ninguém curtiu";
            } else if (pessoas.length === 1) {
                listaCurtidas.textContent = `${pessoas[0]} curtiu`;
            } else if (pessoas.length === 2) {
                listaCurtidas.textContent = `${pessoas[0]} e ${pessoas[1]} curtiram`;
            } else {
                listaCurtidas.textContent = `${pessoas[0]}, ${pessoas[1]} e mais ${pessoas.length - 2} pessoas curtiram`;
            }

            
            document.getElementById("nome").value = "";
        }