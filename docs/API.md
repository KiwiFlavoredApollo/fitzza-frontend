# API

Base URL: `/api/v1`

## 인증

### `POST /auth/signup`

#### Request Body

```json
{
  "email": "john@email.com",
  "username": "John Doe",
  "password": "password"
}
```

### `POST /auth/signin`

#### Request Body

```json
{
  "email": "john@email.com",
  "password": "password"
}
```

### `POST /auth/signout`

## 사용자

### `GET /users/{userId}`

### `POST /users`

## 상품

### `GET /products`

- `GET /products?category=topwear`
- `GET /products?category=bottomwear`

### `GET /products/{productId}`

### `GET /categories`

```json
[
  {
    "name": "topwear",
    "translation": [
      {
        "locale": "ko-KR",
        "name": "상의"
      },
      {
        "locale": "en-US",
        "name": "Topwear"
      }
    ]
  },
  {
    "name": "bottomwear",
    "translation": [
      {
        "locale": "ko-KR",
        "name": "하의"
      },
      {
        "locale": "en-US",
        "name": "Bottomwear"
      }
    ]
  }
]
```