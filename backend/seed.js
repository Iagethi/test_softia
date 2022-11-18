const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Convetion = require("./models/convention.model");
const Student = require("./models/student.model");
const Certificate = require("./models/certificate.model");

dotenv.config();
const URI = process.env.MONGO_URL;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

const seedConventions = [
  {
    _id: "63247b23c598a143e8f957f1",
    name: "Anime Expo",
    nbHours: 4,
  },
  {
    _id: "63247b23c598a143e8f957f2",
    name: "Football",
    nbHours: 5,
  },
  {
    _id: "63247b23c598a143e8f957f3",
    name: "Stars",
    nbHours: 2,
  },
  {
    _id: "63247b23c598a143e8f957f4",
    name: "Music",
    nbHours: 1,
  },
  {
    _id: "63247b23c598a143e8f957f5",
    name: "NodeJs",
    nbHours: 2,
  },
];

const seedStudents = [
  {
    lastname: "Doe",
    firstname: "John",
    email: "john.doe@gmail.com",
    convention: "63247b23c598a143e8f957f1",
  },
  {
    lastname: "Jonah",
    firstname: "Schneider",
    email: "natoque.penatibus.et@protonmail.ca",
    convention: "63247b23c598a143e8f957f1",
  },
  {
    lastname: "Phoebe",
    firstname: "Horton",
    email: "bibendum.ullamcorper@hotmail.net",
    convention: "63247b23c598a143e8f957f1",
  },
  {
    lastname: "Sandra",
    firstname: "Campbell",
    email: "odio.auctor@outlook.ca",
    convention: "63247b23c598a143e8f957f2",
  },
  {
    lastname: "Daniel",
    firstname: "Nash",
    email: "phasellus.ornare.fusce@aol.couk",
    convention: "63247b23c598a143e8f957f2",
  },
  {
    lastname: "Cody",
    firstname: "Mayer",
    email: "arcu@yahoo.com",
    convention: "63247b23c598a143e8f957f2",
  },
  {
    lastname: "September",
    firstname: "Gregory",
    email: "sagittis.lobortis@yahoo.edu",
    convention: "63247b23c598a143e8f957f2",
  },
  {
    lastname: "Sean",
    firstname: "Lane",
    email: "ipsum@yahoo.com",
    convention: "63247b23c598a143e8f957f3",
  },
  {
    lastname: "Zeph",
    firstname: "Estrada",
    email: "blandit@yahoo.net",
    convention: "63247b23c598a143e8f957f3",
  },
  {
    lastname: "Nicole",
    firstname: "Spence",
    email: "proin.vel.nisl@protonmail.couk",
    convention: "63247b23c598a143e8f957f3",
  },
  {
    lastname: "Evan",
    firstname: "Lane",
    email: "luctus@aol.edu",
    convention: "63247b23c598a143e8f957f4",
  },
  {
    lastname: "Kibo",
    firstname: "Griffith",
    email: "amet.metus@hotmail.edu",
    convention: "63247b23c598a143e8f957f4",
  },
  {
    lastname: "Jaquelyn",
    firstname: "Ashley",
    email: "pellentesque.habitant@google.edu",
    convention: "63247b23c598a143e8f957f4",
  },
  {
    lastname: "Avram",
    firstname: "Conley",
    email: "nunc.sed@yahoo.org",
    convention: "63247b23c598a143e8f957f5",
  },
  {
    lastname: "Ezra",
    firstname: "Fry",
    email: "fermentum.fermentum.arcu@hotmail.com",
    convention: "63247b23c598a143e8f957f5",
  },
  {
    lastname: "Kieran",
    firstname: "Perkins",
    email: "aliquam@google.com",
    convention: "63247b23c598a143e8f957f5",
  },
];

const seedDB = async () => {
  await Convetion.deleteMany({});
  await Convetion.insertMany(seedConventions);
  await Student.deleteMany({});
  await Student.insertMany(seedStudents);
  await Certificate.deleteMany({});
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log("DB seeded");
});
