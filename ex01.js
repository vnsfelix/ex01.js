// Exercício 1 – Sistema de Login
// Crie um objeto usuario com:
// login
// senha
// tipo
// Depois, exiba a mensagem:
// O login do administrador é admin e a senha é 1234, muito fraca por sinal.

let usuario = {
    login: "admin",
    senha: "1234",
    tipo: "administrador"
};


console.log(`Ex01:\nO login do ${usuario.tipo} é ${usuario.login} e a senha é ${usuario.senha}, muito fraca por sinal.\n--------------------`);

// Exercício 2 – Cadastro de Aluno
// Crie um objeto aluno com:
// nome
// curso
// turma
// Depois, exiba a mensagem:
// O aluno Lucas está matriculado no curso de Desenvolvimento de Sistemas, na turma 2º DS.

let aluno = {
    nome: "Lucas",
    curso: "Desenvolvimento de Sistemas",
    turma: "2º DS"
};

console.log(`Ex02:\nO aluno ${aluno.nome} está matriculado no curso de ${aluno.curso} na turma ${aluno.turma}.\n--------------------`);

// Exercício 3 – Professor
// Crie um objeto professor com:
// nome
// disciplina
// turno
// Depois, exiba a mensagem:
// O professor Carlos ministra a disciplina de JavaScript no turno da manhã.

let professor = {
    nome: "Carlos",
    disciplina: "JavaScript",
    turno: "manhã"
};

console.log(`Ex03:\nO professor ${professor.nome} ministra a disciplina de ${professor.disciplina} no turno da ${professor.turno}.\n--------------------`);

// Exercício 4 – Empresa
// Crie um objeto empresa com:
// nome
// area
// cidade
// Depois, exiba a mensagem:
// A empresa Tech Solutions atua na área de Tecnologia e fica em Fortaleza.

let empresa = {
    nome: "Tech Solutions",
    area: "Tecnologia",
    cidade: "Fortaleza"
};

console.log(`Ex04:\nA empresa ${empresa.nome} atua na area de ${empresa.area} e fica na cidade de ${empresa.cidade}.\n--------------------`);

// Exercício 5 – Computador
// Crie um objeto computador com:
// marca
// processador
// memoria
// Depois, exiba a mensagem:
// O computador da marca Dell possui processador Intel i5 e memória de 8GB.

let computador = {
    marca: "Dell",
    processador: "Intel i5",
    memoria: "8GB"
};

console.log(`Ex05:\nO computador da marca ${computador.marca} possui processador ${computador.processador} e memória de ${computador.memoria}.\n--------------------`);

// Exercício 6 – Livro
// Crie um objeto livro com:
// titulo
// autor
// paginas
// Depois, exiba a mensagem:
// O livro JavaScript Básico foi escrito por Ana Silva e possui 200 páginas.

let livro = {
    titulo: "JavaScript Básico",
    autor: "Ana Silva",
    paginas: 200
};

console.log(`Ex06:\nO livro ${livro.titulo} foi escrito por ${livro.autor} e possui ${livro.paginas} páginas.\n--------------------`);

// Exercício 7 – Filme
// Crie um objeto filme com:
// nome
// genero
// ano
// Depois, exiba a mensagem:
// O filme Matrix é do gênero Ficção e foi lançado em 1999.

let filme = {
    nome: "Matrix",
    genero: "Ficção",
    ano: 1999
};

console.log(`Ex07:\nO filme ${filme.nome} é do gênero ${filme.genero} e foi lançado em ${filme.ano}.\n--------------------`);

// Exercício 8 – Jogo
// Crie um objeto jogo com:
// nome
// plataforma
// genero
// Depois, exiba a mensagem:
// O jogo Minecraft roda na plataforma PC e pertence ao gênero Sandbox.

let jogo = {
    nome: "Minecraft",
    plataforma: "PC",
    genero: "Sandbox"
};

console.log(`Ex08:\nO jogo ${jogo.nome} roda na plataforma ${jogo.plataforma} e pertence ao gênero ${jogo.genero}.\n--------------------`);

// Exercício 09 – Escola
// Crie um objeto escola com:
// nome
// cidade
// turno
// Depois, exiba a mensagem:
// A escola EEEP funciona na cidade de Fortaleza no turno da manhã.

let escola = {
    nome: "EEEP",
    cidade: "Fortaleza",
    turno: "manhã"
};

console.log(`Ex09:\nA escola ${escola.nome} funciona na cidade de ${escola.cidade} no turno da ${escola.turno}.\n--------------------`);

// O objeto deve possuir as seguintes propriedades:
// usuario
// senha
// nome
// email
// nivel
// curso
// turma
// idade

// Utilize os seguintes dados:
// Usuário: eduardo
// Senha: 1234
// Nome: Eduardo Silva
// E-mail: eduardo@email.com
// Nível: administrador
// Curso: Desenvolvimento de Sistemas
// Turma: DS 2
// Idade: 18

// Depois de criar o objeto, utilize as propriedades do objeto para montar e exibir no console as seguintes informações:
// Nome do usuário
// Nome completo
// E-mail
// Curso
// Turma
// Idade
// Nível de acesso
// Senha

// Por fim, crie uma mensagem utilizando várias propriedades do objeto:

// O usuário eduardo, de 18 anos, está matriculado no curso de Desenvolvimento de Sistemas, turma DS 2. Seu nível de acesso é administrador e seu e-mail é eduardo@email.com. A senha cadastrada é 1234.

let usuarioCompleto = {
    usuario: "eduardo",
    senha: "1234",
    nome: "Eduardo Silva",
    email: "eduardo@email.com",
    nivel: "administrador",
    curso: "Desenvolvimento de Sistemas",
    turma: "DS 2",
    idade: 18
};

console.log(`Ex10:\nO usuário ${usuarioCompleto.usuario}, de ${usuarioCompleto.idade} anos, está matriculado no curso de ${usuarioCompleto.curso}, turma ${usuarioCompleto.turma}. Seu nível de acesso é ${usuarioCompleto.nivel} e seu e-mail é ${usuarioCompleto.email}. A senha cadastrada é ${usuarioCompleto.senha}.\n--------------------`);