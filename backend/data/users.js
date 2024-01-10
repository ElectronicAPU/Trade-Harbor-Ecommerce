import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Apurba Naskar",
    email: "apurbanaskar@email.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
  {
    name: "Naskar Apurbaa",
    email: "naskarapurbar@email.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

export default user;
