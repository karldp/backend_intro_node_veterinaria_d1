const { register, read } = require('./operaciones');

const [operation, id, name, age, type, color, illness] = process.argv.slice(2);

if (operation === "register") {
    register(id, name, age, type, color, illness);
};

if (operation === "read") {
    read();
};