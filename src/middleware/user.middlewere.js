import { userModel } from "../model/user.model.js";

export const userMiddlewere = async (req,res,next) => {

   try {
        

     const userId = req.cookies['session']
    
       if(!userId){
        return res.status(401).json({message: "Invalid cookie"})
       }

       const user = await userModel.findById(userId);

       if(!user){

        return res.status(400).json({message: "User Not Found"});

       }

       req.user = user;

       next();
    
   } catch (error) {
    
          console.log(error);
          return  res.status(500).json({error: "Internal Server Error"});

   }



}