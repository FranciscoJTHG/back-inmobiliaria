import { UserLogin } from "../models/UserLogin";

export const getUserLogin = async (req, res) => {
    
    try {
        const user = await UserLogin.findAll();
        
        res.json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    // res.send('getting user');
}

export const createUserLogin = async (req, res) => {

    const {correo, pass } = req.body;

    try {
        const newUser = await UserLogin.create({
            correo,
            pass
        });
    
        res.json(newUser);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}