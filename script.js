// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os cabeçalhos que devem ser clicáveis (os cabeçalhos dos módulos)
    // Usamos o seletor .modulo-cabecalho
    const cabecalhosModulo = document.querySelectorAll('.modulo-cabecalho');

    // 2. Itera sobre cada cabeçalho encontrado
    cabecalhosModulo.forEach(cabecalho => {
        // Adiciona um ouvinte de evento de clique a cada cabeçalho
        cabecalho.addEventListener('click', () => {
            
            // Encontra o elemento pai (o módulo inteiro: <section class="modulo-item">)
            const moduloItem = cabecalho.closest('.modulo-item');

            // Verifica se o módulo está bloqueado antes de tentar abrir/fechar
            if (moduloItem.classList.contains('bloqueado')) {
                // Se estiver bloqueado, podemos emitir um aviso ou simplesmente ignorar o clique
                console.log('Módulo bloqueado. Ação ignorada.');
                // Opcional: Adicionar um efeito visual temporário de bloqueio
                return; // Encerra a função, impedindo a alternância de classe
            }

            // 3. Alterna a classe 'fechado' no elemento pai (o acordeão)
            // Se a classe 'fechado' estiver presente, ela é removida (abre o módulo).
            // Se a classe 'fechado' NÃO estiver presente, ela é adicionada (fecha o módulo).
            moduloItem.classList.toggle('fechado');
            
            // Opcional: Adicionar a funcionalidade "Recolher tudo"
            // Se você quiser garantir que apenas um módulo esteja aberto por vez (comportamento de acordeão exclusivo),
            // você precisaria adicionar lógica extra aqui para fechar os outros módulos.
        });
    });

    // --- Funcionalidade extra: Botão 'Recolher tudo' ---
    const btnRecolherTudo = document.querySelector('.btn-acao-principal');
    const todosOsModulos = document.querySelectorAll('.modulo-item');

    if (btnRecolherTudo) {
        btnRecolherTudo.addEventListener('click', () => {
            todosOsModulos.forEach(modulo => {
                // Adiciona a classe 'fechado' a todos os módulos, garantindo que estejam recolhidos
                // Apenas módulos que não estão 'bloqueados' (se for o comportamento desejado)
                if (!modulo.classList.contains('bloqueado')) {
                     modulo.classList.add('fechado');
                }
            });
        });
    }
});