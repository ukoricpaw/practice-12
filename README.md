# My App

Node.js REST API с подключением к MongoDB.

## Стек

- **Node.js** — backend сервер
- **Express** — веб-фреймворк
- **MongoDB** — база данных
- **Mongoose** — ODM для MongoDB

## Требования

- Node.js 20+
- MongoDB 7.0+ (локально или MongoDB Atlas)

## Установка

```bash
git clone https://github.com/yourname/my-app.git
cd my-app
npm install
```

## Настройка окружения

Создайте файл `.env` в корне проекта:

```env
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_secret_key
```

Для MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/myapp
```
