const express = require('express');
const app = express();
require("dotenv").config();
const router = require("./routers/routers");
const connectDb = require("./db/conn");
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const PORT = process.env.PORT || 5000; 


app.use(cors());

// app.use(cors({
//   origin: 'https://znotes.in',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// }));


app.use(express.json());
app.use("/api", router);
// app.use("/uploads",express.static("uploads"));
// app.use("/getSubjectDetails",express.static("uploads"));

// // Define routes
// app.get('/', (req, res) => {
//   res.send('Hello, This is the server page!'); // Respond with "Hello, world!" for requests to the root URL
// });


app.use(errorMiddleware);
// Start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


