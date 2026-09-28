# DemoFolio

A paper-trading simulator with **fake data**, built to practice DevOps.

## Run locally
    npm install && npm start          # http://localhost:3000
    npm test

## Docker
    docker build -t demofolio:local .
    docker run -p 3000:3000 demofolio:local
    docker compose up --build         # app + Prometheus (9090) + Grafana (3001)

## Kubernetes (kind/minikube)
    kind load docker-image demofolio:local
    kubectl apply -f k8s/
    kubectl port-forward svc/demofolio 8080:80

## Terraform
    cd terraform && terraform init && terraform plan

## Practice order
1. Docker and Compose  2. CI green on GitHub Actions  3. Push image to GHCR
4. Deploy to Kubernetes  5. Terraform an ECR repo, then ECS/EKS  6. Grafana dashboard on /metrics
