import ApplicationError from "../../middlewares/appError.js";
import UserModel from "./user.modal.js";
import jwt from 'jsonwebtoken'

export default class UserController {
    login(req, res) {
        const { email, password } = req.body;
        const result = UserModel.signIn(email, password);
        
        if (!result) {
          throw new ApplicationError("Invalid credentials",401)
        } else {
          // create token
          const token = jwt.sign(
            { userId: result.id, email: result.email },
            "36SLwigPI1yo9aOGV2wOgBKIi3zb63yi",
            {
              expiresIn: "1h", // expires in 1 hour
            }
          );
          
          res.status(200).send(token);
        }
      }
      register(req, res) {
        const { name, email, password } = req.body;
        const result = UserModel.signUp(name,email,password);
        if (!result) {
            throw new ApplicationError("User Already Registered",400)
          
        } else {
          res.status(201).json({ message: "User registered successfully" });
        }
      }
}