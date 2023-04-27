API Test
Descrição
Esta API foi desenvolvida como um teste e tem como objetivo simular um sistema de empresas e funcionários.

Rotas
GET /company: lista todas as empresas criadas.
GET /employee: lista todos os funcionários de todas as empresas.
GET /profile: passando o ID de uma empresa no header da requisição, é possível obter os funcionários dessa empresa.
Como executar
Para executar esta API em um ambiente local, siga os passos abaixo:

Clone este repositório em sua máquina:
bash
Copy code
git clone https://github.com/yourusername/apitest.git
Certifique-se de ter o Docker instalado em sua máquina.

Navegue até o diretório raiz do projeto e execute o seguinte comando para criar uma imagem Docker da aplicação:

Copy code
docker build -t apitest .
Após a conclusão da criação da imagem, execute o seguinte comando para iniciar o container da aplicação:
arduino
Copy code
docker run -p 3333:3333 apitest
Acesse a API em seu navegador ou em alguma ferramenta de teste de API, através das seguintes rotas:
GET http://localhost:3333/company
GET http://localhost:3333/employee
GET http://localhost:3333/profile
Tecnologias utilizadas
Node.js
Express.js
Docker
Autor
Igor S. Menezes
