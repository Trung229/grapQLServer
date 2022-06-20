const { users, books } = require("../Fakedata")
const { addUser, getAllUsers, loginUser } = require("../services/user")
const { getAllBooks } = require("../services/book")
const resolvers = {
    Query: {
        getAllUsers() {
            const data = getAllUsers();
            console.log(data);
            return data;
        },

        async getAllBooks() {
            const data = await getAllBooks();
            console.log(data);
            return data;
        }
    },

    Mutation: {
        createUser(parent, args) {
            const res = addUser(args)
            return res
        },
        loginUser(parent, args) {
            const res = loginUser(args)
            return res
        }
    }
}

module.exports = { resolvers }