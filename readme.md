# Speer Backend Assessment
## Twitter Backend

Start using: 
```
npm run dev
```

MongoDB storage.

express-session for session management.

bcrypt for encryption.
Ideally would use Oath2.0.

## Usage

### Users
Create an account using post to `/user`.

Request body format:

```json
{
    "username": "username",
    "email": "email",
    "password": "password"
}
```

### Login
Login using post to `/user/login`

Request body format:

```json
{
    "email": "email",
    "password": "password"
}
```

### Tweet
Create using post to `/tweet`

Request body format:

```json
{
    "text": "text",
    "parent": "parentID"
}
```
 `parentID` is used for linking tweets as replies.
