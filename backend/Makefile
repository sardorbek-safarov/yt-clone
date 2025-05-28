# Run docker commands
up: 
	docker compose up -d
build: 
	docker compose build
down: 
	docker compose down

# Makefile for common Prisma and NestJS commands

# Run initial migration
migrate-dev: 
	docker compose exec backend npx prisma migrate  dev --name init

# Run migration with custom name: make migrate NAME=my-migration
migrate: 
	docker compose exec backend  npx prisma migrate dev --name $(name)

# Generate Prisma client
generate:
	docker compose exec backend npx prisma generate
	npx prisma generate

# Format Prisma schema
format:
	docker compose exec backend npx prisma format

# Run NestJS app in development mode
start-dev:
	npm run start:dev --prefix backend

# Run Prisma Studio (GUI for DB)
studio:
	docker compose exec backend npx prisma studio

# Reset database (dangerous!)
reset-db:
	docker compose exec backend npx prisma migrate reset

# Help command
help:
	@echo "Makefile commands:"
	@echo "  make migrate-dev       - Run 'npx prisma migrate dev --name init'"
	@echo "  make migrate NAME=xyz  - Run migration with custom name"
	@echo "  make generate          - Run 'npx prisma generate'"
	@echo "  make format            - Run 'npx prisma format'"
	@echo "  make start-dev         - Start NestJS in dev mode"
	@echo "  make studio            - Open Prisma Studio"
	@echo "  make reset-db          - Reset database (DANGER!)"
