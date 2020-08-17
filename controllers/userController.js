import userRepository from '../repositories/userRepository';

const notFoundMessage = () => 'User not found';
const errorMessage = () => 'Something went wrong!';

module.exports = {
    getUserById: (req, res) => {
        try {
            const user = userRepository.getUserById(req.params.id);

            if (!user) {
                return res.status(404).json({ message: notFoundMessage() });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    },
    getUserByLogin: (req, res) => {
        try {
            const user = userRepository.getUserByLogin(req.params.login);

            if (!user) {
                return res.status(404).json({ message: notFoundMessage() });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    },
    getAutoSuggestUsers: (req, res) => {
        try {
            const { loginSubstring, limit } = req.query;
            const users = userRepository.getAutoSuggestUsers(loginSubstring, limit);

            if (!users) {
                return res.status(404).json({ message: notFoundMessage() });
            }
            return res.status(200).json(users);
        } catch (error) {
            console.log(error);
        }
    },
    updateUser: (req, res) => {
        try {
            const user = userRepository.updateUser(req.params.id, req.body);

            if (!user) {
                return res.status(500).json({ message: errorMessage() });
            }
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    },
    deleteUser: (req, res) => {
        try {
            const response = userRepository.deleteUser(req.params.id);

            if (!response) {
                return res.status(500).json({ message: errorMessage() });
            }
            return res.status(200).send(response);
        } catch (error) {
            console.log(error);
        }
    },
    saveUser: (req, res) => {
        try {
            const userData = {
                login: req.body.login,
                password: req.body.password,
                age: req.body.age
            };

            const newUser = userRepository.saveUser(userData);

            if (!newUser) {
                return res.status(500).json({ message: errorMessage() });
            }
            return res.status(200).json(newUser);
        } catch (error) {
            console.log(error);
        }
    }
};
