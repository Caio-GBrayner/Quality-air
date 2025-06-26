<div align="center">

<h1 align="center">Quality Air Monitoring System</h1>

<p align="center">
    <strong>A system for monitoring and predicting air quality</strong>
</p>

[![pt-BR](https://img.shields.io/badge/lang-pt--BR-green.svg)](./docs/README.pt-br.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
  - [Connect with us on LinkedIn](#connect-with-us-on-linkedin)
  - [Fork and clone the repository](#fork-and-clone-the-repository)
  - [Project Structure](#project-structure)
- [Build and Run with Docker Compose](#build-and-run-with-docker-compose)
  - [Prerequisites](#prerequisites)
  - [Building and Starting the Application](#building-and-starting-the-application)
- [API Usage Examples](#api-usage-examples)
- [See rendered notebook](#see-rendered-notebook)
- [License](#license)

## About
This project is an **Air Quality Monitoring System** that combines a modern web frontend with a backend API for data analysis and predictions. It allows you to visualize air quality information and, in the future, leverage machine learning models to predict trends.

## Features

- **Interactive Frontend:** Web interface for displaying air quality data.
- **RESTful API Backend:** Service for data processing and hosting prediction models.
- **ML Model Integration:** Loads a prediction model (`Air_Quality.pkl`) for data analysis.
- **Docker Compose Orchestration:** Simplifies setting up and running all services (frontend and backend) in an isolated environment.
- **CRUD Operations (planned):** For managing user data and monitoring stations.

## Technologies Used

- **Frontend:**
    - **HTML5:** Web application structure.
    - **CSS3:** Styling and layout (`via style.css`).
    - **JavaScript:** Interactive interface logic (`APP.js`).
    - **Nginx:** Web server for the frontend, serving static files and acting as a reverse proxy.

- **Backend:**
    - **Python 3.12:** Primary programming language.
    - **Flask:** Web framework for building the RESTful API.
    - **Pandas/Scikit-learn (or similar):** For data manipulation and using the `.pkl` model.
    - **Gunicorn (implied via Flask dev server):** WSGI server for Flask.

- **Infrastructure:**
    - **Docker:** For containerization of services.
    - **Docker Compose:** For orchestration and management of multiple containers.

## Contributing
We welcome contributions! If you'd like to help improve this project, please follow the guidelines below.

### Connect with us on LinkedIn

1. Connect with Caio Brayner [LinkedIn](https://www.linkedin.com/in/caiogomesbrayner).
2. Connect with Jackson Luiz [LinkedIn](https://www.linkedin.com/in/jackson-luiz-550992287)
3. Connect with Filipe Leonny [LinkedIn](https://www.linkedin.com/in/filipeleonny)
4. Connect with Guilherme Felipe [LinkedIn](https://www.linkedin.com/in/guilherme-felipe-16a134302)

### Fork and clone the repository

1. Fork the repository [(click here to fork now)](https://github.com/Caio-GBrayner/Quality-air)
2. Clone your fork: `git clone https://github.com/Caio-GBrayner/Quality-air`
3. Create a new branch for your changes: `git checkout -b feature/my-new-feature`
4. Push your commits: `git commit -m "Adds new feature"`
5. Push your changes to your fork: `git push origin feature/my-new-feature`
6. Submit a new Pull Request to the main repository.

### Project Structure
The project structure is organized as follows:
```
    Quality-air/
    ├── backend/                  # Contains the Flask API code and ML model
    │   ├── app.py                # Flask application
    │   ├── Air_Quality.pkl       # Machine Learning model
    │   ├── requirements.txt      # Backend dependencies
    │   └── Dockerfile            # Dockerfile for the backend service
    ├── frontend/                 # Contains static frontend files and Nginx configuration
    │   ├── index.html            # Main frontend page
    │   ├── style.css             # CSS styles
    │   ├── APP.js                # Frontend JavaScript logic
    │   ├── img/                  # Folder for static images
    │   │
    │   ├── nginx.conf            # Nginx configuration
    │   └── Dockerfile            # Dockerfile for the frontend service
    ├── docker-compose.yml        # Docker services orchestration
    └── README.md 
```
## Build and Run with Docker Compose

To get the system up and running, you'll need Docker and Docker Compose installed.

### Prerequisites

1. Make sure you have the following tools installed on your machine:

    - **Docker Engine:** [Installation instructions](https://docs.docker.com/engine/install/)
    - **Docker Compose:** Usually comes bundled with Docker Desktop. If not, [install it separately.](https://docs.docker.com/compose/install/)

### Building and Starting the Application
Follow these steps to build the images and start the services:

1. **Navigate to the project's root directory** in your terminal (where `docker-compose.yml is located`):

```bash
    cd /path/to/Quality-air/
```
2. **Build the images and start the containers:**

```bash
    docker compose up --build
```
- The `--build` command will ensure the images are built (or rebuilt if there are changes in the Dockerfiles).
- This process may take a few minutes the first time, as Docker will download base images and install dependencies.

3. **Access the application:**
Once the containers are running, you can access the frontend in your browser at:

`http://localhost/`

The backend will be available internally to the frontend via `http://backend:5000`.

4. **Stop the application:**
To stop and remove containers (but keep the built images), use:

```bash
    docker compose down 
```
To stop and remove containers, networks, and images (for a complete cleanup or rebuilding from scratch):

```bash
  docker compose down --volumes --rmi all  
```

## Api Usage Examples
The backend exposes a main endpoint for prediction.

- **Prediction Endpoint:**
- **URL:** `http://localhost/predict` (accessed via Nginx proxy)
    - **Method:** `POST`
    - **Request Body (JSON):** The input data for the air quality prediction model 
        (e.g., {"features": ['temperatura': 'Temperature',
            'umidade': 'Humidity',
            'pm25': 'PM2.5',
            'so2': 'SO2',
            'no2': 'NO2',
            'pm10': 'PM10',
            'co': 'CO',
            'proximity_industrial': 'Proximity_to_Industrial_Areas',
            'population_density': 'Population_Density']}).
    Example using `curl` (assuming you're making the request to Nginx/frontend, which will proxy to the backend):

```bash
  curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"features": []}' \
     http://localhost/predict  
```
## See rendered notebook
1. Url: `https://nbviewer.org./github/Caio-GBrayner/Quality-air/blob/main/EDA/Air-Quality.ipynb`

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.