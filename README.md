# Node GMP Project - Second Task

### Prerequisites

In order to be able to run the app you will need to install the following before:

- [Node.js](https://nodejs.org/en/)

### Getting Started

Follow next instructions to be able to clone this project and run it locally.

1. First download the project by cloning the repository

```
git clone https://github.com/edugtz/node-gmp-project.git
```

2. Go to project **root** folder

```bash
cd node-gmp-project
```

3. Inside the **root** folder run the following command to install all the necessary dependencies:

```bash
npm install
```

4. Finally just run the app with:

```bash
npm start
```

The **application** will start running on `http://localhost:8080`

### Endpoints

### Create a new user

#### POST /api/users/

|       Name | Required | Type   | Request |
| ---------: | :------: | :----- | :------ |
|    `login` | required | string | body    |
| `password` | required | string | body    |
|      `age` | required | number | body    |

### Get users list

#### GET /api/users/

|             Name |   Required   |  Type  | Request |
| ---------------: | :----------: | :----: | :------ |
| `loginSubstring` | not required | string | query   |
|          `limit` | not required | string | query   |

### Get specified user

#### GET /api/users/:id

| Name | Required |  Type  | Request |
| ---: | :------: | :----: | :------ |
| `id` | required | number | params  |

### Delete a user

#### DELETE /api/users/:id

| Name | Required |  Type  | Request |
| ---: | :------: | :----: | :------ |
| `id` | required | number | params  |

### Update a user

#### PUT /api/users/:id

| Name | Required |  Type  | Request |
| ---: | :------: | :----: | :------ |
| `id` | required | number | params  |
