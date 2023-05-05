const mongoose = require("mongoose");
const app = require("./app");
const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    API_VERSION,
    IP_SERVER,
    JWT_SECRET_KEY,
} = require("./constans");

const PORT = 3200;
app.get(`/api/${API_VERSION}/auth`, (req, res) => res.send('Holi'));
console.log(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);
mongoose
        .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to mongodb");

            app.listen(PORT, () => {
                console.log("#######################");
                console.log("####### API REST ########");
                console.log("#######################");
                
                console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
            });
        })
        .catch((error) => {
            console.error("Error conectado a la base de datos:", error);
        });
    