# Backend Of User Search Application

# Бекнд Приложения для Поиска Пользователей

This is a simple user search application built using NestJS and React.
Это простое приложение для поиска пользователей, построенное с использованием NestJS и React.

It allows users to search for other users by email and phone number.
Оно позволяет пользователям искать других пользователей по электронной почте и номеру телефона.

It allows users to search for other users by email and phone number.
Оно позволяет пользователям искать других пользователей по электронной почте и номеру телефона.

## Features

- Search users by email and phone number.
- Cancel ongoing search requests when a new request is made.
- Handles connection closure and request cancellation.

## Возможности

- Поиск пользователей по электронной почте и номеру телефона.
- Отмена текущих запросов при отправке нового запроса.
- Обработка закрытия соединения и отмены запросов.

## Tech Stack

- **Backend:** NestJS, Express
- **Frontend:** React, Ant Design
- **Database:** JSON file (for simplicity in this demo)
- **HTTP Client:** Axios

## Технологический Стек

- **Backend:** NestJS, Express
- **Frontend:** React, Ant Design
- **База данных:** JSON файл (для простоты в этом демо)
- **HTTP Клиент:** Axios

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/NuraliAKH/3205_backend.git
   cd 3205_backend
   ```
2. **Backend Setup:**
   ```sh
   npm install
   ```

### Running the Application

    ```sh
    npm run start:dev
    ```

1. **Start the Backend Server:**
   The backend server will start on `http://localhost:3000`.

## Начало Работы

### Предварительные Требования

- Node.js (v14 или новее)
- npm или yarn

### Установка

1.  **Клонируйте репозиторий:**

    ```sh
    git clone https://github.com/NuraliAKH/3205_backend.git
    cd 3205_backend
    ```

2.  **Настройка Backend:**

    ```sh
    npm install
    ```

### Запуск Приложения

    ```sh
    npm run start:dev
    ```

1.  **Запустите Backend Сервер:**
    Сервер backend запустится на `http://localhost:3000`.

### Project Structure

#### Backend

- `src/models/users/users.controller.ts`: Defines the routes and request handling logic.
- `src/models/users/users.service.ts`: Handles business logic and data retrieval.
- `src/models/users/dto/search.dto.ts`: Defines the data transfer object for search queries.
- `src/models/users/users.json`: Sample user data.

### Структура Проекта

#### Backend

- `src/models/users/users.controller.ts`: Определяет маршруты и логику обработки запросов.
- `src/models/users/users.service.ts`: Обрабатывает бизнес-логику и извлечение данных.
- `src/users/dto/search.dto.ts`: Определяет объект передачи данных для поисковых запросов.
- `src/models/users/users.json`: Пример данных пользователей.
