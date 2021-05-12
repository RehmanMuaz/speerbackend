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

# Usage

## Users
### Create User
Create an account using POST to `/user`.

Request body format:

```json
{
    "username": "username",
    "email": "email",
    "password": "password"
}
```
### Delete User
Delete logged in account using DELETE to `/user`

### Change Password
Change password for logged in account using PUT to `/user/password`

Request body format:
```json
{
    "password": "password"
}
```

### Change Username
Change username for logged in account using PUT to `/user/username`

Request body format:
```json
{
    "username": "username"
}
```

## Sessions
### Login User
Login using post to `/`

Request body format:

```json
{
    "email": "email",
    "password": "password"
}
```
### Logout User
Logout using post to `/logout`

## Tweet
Create using POST to `/tweet`

Request body format:

```json
{
    "text": "text",
    "parent": "parentID"
}
```
 `parentID` is used for linking tweets as replies.
