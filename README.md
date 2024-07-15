# Projeto 5 - Conversor de Moedas

Projeto criado durante estudos do curso 'Formação Angular 13 - O início criando 7 projetos' da Udemy

Implementa um sistema de conversão de moedas que busca a cotação atual da moeda em Angular.

O projeto do curso foi criado com a versão 13 do Angular, porém acompanhei o curso já desenvolvendo o projeto na versão 18 do Angular (a versão mais atual na data que fiz o curso (07/2024)).

Principais mudanças na versão 18 em relação ao curso:

- Utilização dos componentes no padrão standalone ao invés de módulos;
- Atualização para o bootstrap 5;
- Mudança dos ícones para o novo padrão do Bootstrap Icons 5;
- Efetuado tratamento na diretiva NumeroDirective para manter o ponto na posição correta ao adicionar letras no início do texto. Da forma como estava no curso se estivesse com o valor '123.456' e adicionasse um 'a' no início (ficando 'a123.456') a diretiva tirava a letra, porém ficava '1234.56' pois armazenava a posição do ponto em relação ao conteúdo antigo;