const fs = require('fs'); 


const register = (name, age, type, color, illness) => {

    const appointments = JSON.parse(fs.readFileSync("citas.json", "utf8"));
    const id = Math.floor(Math.random() * 1000).toString()
    if (!name || !age || !type || !color || !illness) {
        console.log("Please add all data required");
        return;
    }
    appointments.push({id, name, age, type, color, illness});
    fs.writeFileSync("citas.json", JSON.stringify(appointments));
    console.log("Appointment added successfully");
}

const read = () => {
  const appointments = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(appointments);
}

module.exports = { register, read }; 