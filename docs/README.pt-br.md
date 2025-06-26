<div align="center">

<h1 align="center">Sistema de Monitoramento da Qualidade do Ar</h1>

<p align="center">
    <strong>Um sistema para monitoramento e previsão da qualidade do ar.</strong>
</p>

[![pt-BR](https://img.shields.io/badge/lang-pt--BR-green.svg)](./docs/README.pt-br.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

</div>

## Sumário

- [Sumário](#sumario)
- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Contribuir](#como-contribuir)
  - [Conecte-se conosco no LinkedIn](#conecte-se-conosco-no-linkedIn)
  - [Faça o Fork e Clone o Repositório](#faça-o-fork-e-clone-o-repositório)
  - [Estrutura do Projeto](#estrutura-do-projeto)
- [Construir e Executar com Docker Compose](#construir-e-executar-com-docker-compose)
  - [Pré-requisitos](#pre-requisitos)
  - [Construindo e Iniciando a Aplicação](#construindo-e-iniciando-a-aplicação)
- [Exemplos de Uso da API](#exemplos-de-uso-da-api)
- [Licença](#licença)

## Sobre
Este projeto é um **Sistema de Monitoramento da Qualidade do Ar** que combina um frontend web moderno com uma API de backend para análise e previsão de dados. Ele permite a visualização de informações sobre a qualidade do ar e, futuramente, a utilização de modelos de aprendizado de máquina para prever tendências.

## Funcionalidades

- **Frontend Interativo:** Interface web para exibição de dados da qualidade do ar.
- **Backend de API RESTful:** Serviço para processamento de dados e hospedagem de modelos de previsão.
- **Integração de Modelo ML:** Carregamento de um modelo de previsão (`Air_Quality.pkl`) para análise de dados.
- **Orquestração com Docker Compose:** Facilita a configuração e execução de todos os serviços (frontend e backend) em um ambiente isolado.
- **Operações CRUD (planejado):** Para gerenciamento de dados de usuários e estações de monitoramento.

## Tecnologias Utilizadas

- **Frontend:**
    - **HTML5:** Estrutura da aplicação web.
    - **CSS3:** Estilização e layout (`via style.css`).
    - **JavaScript:** Lógica interativa da interface (`APP.js`).
    - **Nginx:** Servidor web para o frontend, servindo arquivos estáticos e atuando como proxy reverso.

- **Backend:**
    - **Python 3.12:** Linguagem de programação principal.
    - **Flask:** Framework web para construção da API RESTful.
    - **Pandas/Scikit-learn (or similar):** Para manipulação de dados e uso do modelo `.pkl`.
    - **Gunicorn (implied via Flask dev server):** Servidor WSGI para o Flask.

- **Infraestrutura:**
    - **Docker:** Para conteinerização dos serviços.
    - **Docker Compose:** Para orquestração e gerenciamento de múltiplos contêineres.

## Como Contribuir
Estamos abertos a contribuições! Se você quiser ajudar a melhorar este projeto, siga as diretrizes abaixo.

### Conecte-se conosco no LinkedIn

1. Conecte-se com Caio Brayner [LinkedIn](https://www.linkedin.com/in/caiogomesbrayner).
2. Conecte-se com Jackson Luiz [LinkedIn](https://www.linkedin.com/in/jackson-luiz-550992287)
3. Conecte-se com Filipe Leonny [LinkedIn](https://www.linkedin.com/in/filipeleonny)
4. Conecte-se com Guilherme Felipe [LinkedIn](https://www.linkedin.com/in/guilherme-felipe-16a134302)

### Faça o Fork e Clone o Repositório

1. Faça o fork do repositório [(clique aqui para fazer o fork agora)](https://github.com/Caio-GBrayner/Quality-air)
2. Clone seu fork: `git clone https://github.com/Caio-GBrayner/Quality-air`
3. Crie uma nova branch para suas alterações: `git checkout -b feature/my-new-feature`
4. Envie seus commits: `git commit -m "Adds new feature"`
5. Envie suas alterações para o seu fork: `git push origin feature/my-new-feature`
6. Envie um Pull Request para o repositório principal.

### Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

```
    Quality-air/
    ├── backend/                  # Contém o código da API Flask e o modelo ML
    │   ├── app.py                # Aplicação Flask
    │   ├── Air_Quality.pkl       # Modelo de Machine Learning
    │   ├── requirements.txt      # Dependências do backend
    │   └── Dockerfile            # Dockerfile para o serviço backend
    ├── frontend/                 # Contém os arquivos estáticos do frontend e configuração Nginx
    │   ├── index.html            # Página principal do frontend
    │   ├── style.css             # Estilos CSS
    │   ├── APP.js                # Lógica JavaScript do frontend
    │   ├── img/                  # Pasta para imagens estáticas
    │   │
    │   ├── nginx.conf            # Configuração do Nginx
    │   └── Dockerfile            # Dockerfile para o serviço frontend
    ├── docker-compose.yml        # Orquestração dos serviços Docker
    └── README.md                 # Este arquivo
```

## Construir e Executar com Docker Compose

Para colocar o sistema em funcionamento, você precisará ter o Docker e o Docker Compose instalados.

### Pré-requisitos

1. Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

    - **Docker Engine:** [Instruções de instalação](https://docs.docker.com/engine/install/)
    - **Docker Compose:** Geralmente vem junto com o Docker Desktop. Caso contrário, [instale-o separadamente.](https://docs.docker.com/compose/install/)

### Construindo e Iniciando a Aplicação
Siga estes passos para construir as imagens e iniciar os serviços:

1. **Navegue até o diretório raiz do projeto** no seu terminal  (onde o `docker-compose.yml` está localizado):

```bash
    cd /path/to/Quality-air/
```
2. **Construa as imagens e inicie os contêineres:**

```bash
    docker compose up --build
```
- O comando `--build` garantirá que as imagens sejam construídas (ou reconstruídas se houver mudanças nos Dockerfiles).
- Este processo pode levar alguns minutos na primeira vez, pois o Docker fará o download das imagens base e instalará as dependências.

3. **Acesse a aplicação**
Uma vez que os contêineres estejam rodando, você pode acessar o frontend no seu navegador em:

`http://localhost/`

O backend estará disponível internamente para o frontend via `http://backend:5000`.

4. **Parar a aplicação:**
Para parar e remover os contêineres (mas manter as imagens construídas), use:

```bash
   docker compose down 
```
Para parar e remover contêineres, redes e imagens (para uma limpeza completa ou reconstrução do zero):

```bash
  docker compose down --volumes --rmi all  
```

## Exemplos de Uso da API
O backend expõe um endpoint principal para previsão.

- **Endpoint de Previsão:**
- **URL:** `http://localhost/predict` (accessed via Nginx proxy)
    - **Método:** `POST`
    - **Corpo da Requisição (JSON):** Os dados de entrada para o modelo de previsão da qualidade do ar 
        (ex: {"features": ['temperatura': 'Temperature',
            'umidade': 'Humidity',
            'pm25': 'PM2.5',
            'so2': 'SO2',
            'no2': 'NO2',
            'pm10': 'PM10',
            'co': 'CO',
            'proximity_industrial': 'Proximity_to_Industrial_Areas',
            'population_density': 'Population_Density']}).
    Exemplo usando `curl`(assumindo que você está fazendo a requisição para o Nginx/frontend, que fará o proxy para o backend):

```bash
  curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"features": []}' \
     http://localhost/predict  
```
## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.