## Criando o documento React com next.js através do yarm
yarn create next-app moveit-next

## Instalando o typescript para o next.js
yarn add typescript

## instalar junto a tipagem para as biblioteca react
@types/react

## instalar a tipagem para as biblioteca react-dom
@types/react-dom

## Instalar o node, pois o next.js tem o servidor em node para rodar a criação da interface do react
@types/node

## Instalar tudo como depencia de desenvolvimento (-D), ou seja, dependencia que não precisamos em produção

## Instalando todas essas dependencias juntas
yarn add typescript @types/react @types/react-dom @types/node -D 
------------------------------------------------------------------------------------------------------

## 1.Feito o primeiro componente 'ExperienceBar', que nada mais é que a barra de progressão do usuario na nossa aplicação.

## 2.Estilização global feita.

## 3.Estilização da Barra de progresso.

## 4.Criado o arquivo _document.tsx para colocar as fontes e tudo que vai no head de um codigo HTML, pois ele carrega apenas uma unica vez numa visita do usuario na nossa aplicação, sem gerar processamento a mais.

## 5. Criando uma pasta de components no 'styles', para utilizar os modules css e trabalhar a estilização de forma individual em uma classe sem afetar outras.

## 6.Criando o arquivo 'ExperienceBar.modules.css' e transferindo todo o CSS e estilização que utiliza a classe '.experience-bar' do 'global.css' para este arquivo.

## 7.Mudando os nomes das classes para commal-case(primeira maiuscula) e modificando a instanciação delas no componente para '{styles.nomeDaClasse}

## 8.Criando uma nova pasta 'pages' na pasta 'styles' e criando o arquivo 'Home.module.css' para toda a estilização da pagina home do documento.

## 9.Criando o componente 'Profile.tsx' para implementar o perfil do usuario.

## 10.Iniciando estilização modular do profile

## 11. Criando componente 'CompletedChallenges' e estilizando

## 12.Criando componente 'Countdown' e estilizando

## 13. Criando o primeiro hook para dar vida ao 'Countdown', usando o 'useState', fazendo as logicas matematicas para obter os minutos e segundos e por fim transformando os minutos e segundos em string e os testando com 'padStart' para ver se tem dois caracteres para ser separados, se não adiciona um zero a esquerda e por fim divide-os com split e os declara no 'span'.

## 14. Usamos a dependencia do react 'useEffect', que nada mais é que um efeito cascata, ou seja, acontece toda vez que algum elemento muda. Criamos ele na nossa aplicação, testanto-o atraves do array de depencia '[]' toda vez quando o 'countdown' muda seu estado para ativo e quando o 'time' mudava seu estado idem. Dai fizemos uma condicional para se o 'countdown' estivesse ativo e o 'time' fosse maior que 0 que setasse um setTimeout de 1000s e a cada um segundo desse timeout, decrementavamos mais 1 segundo da nossa constante 'time, através do setTime.

## 15. Acrescentamos uma logica ternaria para trocas de botoes para ativo e não ativo usando o '`${..}` e estilizamos o segundo botão não ativo

## 16. Depos criamos uma nova função 'resetCountdown' para resetar o timeouut e para isso funcionar sem o delay do timeout, criamos uma tipagem 'NodeJs.Timeout' que faz a função de cancelar a execução do 'setTimeout' e a inserimos no 'clearTimeout'

## 17. Criado um 'useState' para decretar que o coutndown foi finalizado, inserimos a nova constante no 'else if' do 'useEffect' para tornar o estado finalizado para 'true' e o 'isActive' para 'false'. A partir dai criamos uma condição ternaria para mostrar um novo botão disabled quando o 'countdown estiver finalizado e caso ainda não esteja finalizado, usamos os outros botões normais criados anteriormente. Conhecemos tambem a tag FRAGMENT'<>' de uso proprio do react para criar um elemento sem ele estar necessariamente ali presente, apenas para consertar a limitação do react que necessita de uma tag envolto ao codigo.

## 18. Criado o componente 'ChallengeBox' e o estilizando.

## 19. Começando a dar vida ao 'ChallengeBox' com condicional ternario para testar se o desafio está ativo ou não. 

## 20. Demos inicio ao conceito de contexto no react, esse quue possibilida que os componentes conversem entre si, para que possam enviar e receber os dados necessarios e fazer a aplicação funcionar.

## 21. Criamos uma nova pasta dentro do 'src' ccom o nome 'contexts' e dentro dela já criamos um arquivo chamado 'ChallengeContext'. Dentro do arquivo instanciamos uma constante que cria um contexto 'createContext({})'.

# 22. Já no arquivo 'app.tsx', fazemos uma modificação, que é colocar envolto ao componente uma nova tag chamada 'ChallengeContext.Provider', esse PROVIDER permite que todos os elementos desse provider, tenham acesso aos dados de todos os componentes da aplicação 

## 23. Criando no 'ChallengeContext' uma nova função 'ChallengeProvider' com toda a logica, funções e instanciações. Instanciamos a função exportada 'ChallengeProvider' no arquivo 'app.tsx'.

## 24. Porem para os componentes funcionarem com um contexto envolto deles, é necessario criar um propriedade chamada 'children'. 

## 25. Criado um arquivo '.json' contendo todos os desafios que serão exibidos para o usuario

## 26. Criamos funções para serem lançadass quando um desafio era completado e o botão ' completei' recebia um clique e tambem o mesmo para o 'falhei'.

## 27. Fizemos todos os metodos e funções para que o usuario subisse de nivel, ganhasse o xp ofertado ao completar o desafio e deixamos a barra de experiencia dinamica, assim como os numeros de desafios completados.

## 28. Criamos um novo contexto, dessa vez para o countdown isso para que o 'challengeBox' pudesse se comunicar com o contador e resetasse ele a partir dos seus botões. E transferimos as variaveis e funções do arquivo 'countdown' para o 'Contexto'.

## 29. Colocamos esse contexto do 'countdown' no arquivo 'index.tsx' pois ele so aparece em uma pagina de nossa aplicação.

## 30. Adicionamos notificações web e audio de notificação que são lançados no momento que os desafios ficam disponiveis.

## 31. Para armazenar os dados em cookies, começamos instalando uma biblioteca.
yarn add js-cookies

## 32.Adicionando a tipagem a biblioteca 'js-cookies' para que ela possa trabalhar como o typescript.
yarn add @types/js-cookie -D

## 33. Usamos o useEffect para armazenar os dados no cookie

## 34.Dentro da nossa pagina home, que é aonde queremos recuperar os cookie no momento, criamos uma função assincrona chamada 'getServerSideProps' no fim do codigo. Essa função importada do next, faz com que os navegadores leiam primeiro o conteudo do servidor node.js/next 'getServerSideProps' e depois renderize e mostre a aplicação final. 

## 35. Transferimos nosso contexto 'ChallengeProvider' para a pagina 'home/index.tsx' e removemos do arquivo app.

## 36. Adicionamos os elementos a tipagem no 'ChallengeProviderProps', passamos a propriedade ao lado do children como '...rest', ou seja, para não dar erro de duplicado, pegamos todo o resto da tipagem com essa propriedade '...rest' e a adicionamos implicitamente.

## 38. Por fim construimos um modal, para ser lançado toda vez que upamos de level. Instanciamos ele dentro do 'ChallengeProvider'. fizemos um ternario para quando o modal estiver setado com true, ele abrir. E também criamos uma função para fechar o modal através do botão que colocamos nele.



