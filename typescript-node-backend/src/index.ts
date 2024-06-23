import express, {Request, Response} from 'express';
import connect from './database/connect'
import User from './models/user'

const app = express();
const port: number = 3000;
const DB = "mongodb://localhost:27017/tsUsers";

connect(DB).then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.log(error);
})

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
})

app.post('/signup', async (req: Request, res: Response) => {
    const {name, email} = req.body;
    try {
        const validateEmail = await User.findOne({name: name, email: email});
        if(validateEmail) {
            res.send({message: "Email already exists"});
        }
        else {
            const user = new User({name, email});
            const save = await user.save();

            if(save) {
                res.status(201).send({message: "New User created"});
            }
            else {
                res.status(500).send({message: "Unable to create user"});
            }
        }
    } catch (error) {
        console.log(error);
    }
})

app.post('/login', async (req: Request, res: Response) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email: email});
        if(user) {
            res.status(200).send({message: "Login Successfully"});
            console.log(user);
        }
        else {
            res.status(404).send({message: "User not found"});
        }
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})