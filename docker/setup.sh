set -e

echo "🟡 Starting services..."
docker compose up -d

echo "⏳ Waiting for Postgres to be ready..."
until docker compose exec postgres pg_isready -U langchain -d langchain_lab -q; do
  sleep 1
done
echo "✅ Postgres is ready."

echo "⏳ Waiting for Qdrant to be ready..."
until curl -sf http://localhost:6333/readyz >/dev/null 2>&1; do
  sleep 1
done
echo "✅ Qdrant is ready."
