/**
 * 
 * 
 */

import { userModel } from "../model/user.model.js"
import bcrypt from "bcrypt";

export const userRegister = async (req,res) => {

    try {

        const {name,password,email} = req.body;

        if(!name || !password || !email){

          return  res.status(404).json({error: "All params Not Found"});

        }
              
         const salt = bcrypt.genSaltSync(10);
         const hashedPassword = bcrypt.hashSync(password, salt);

        const user = await userModel.create({name,password : hashedPassword,email});

        return res.status(200).json({message: "User Register Successfully",user});
        
    } catch (error) {
       
        console.error(error);
        return  res.status(500).json({error: "Internal Server Error"});

    }

}


 
export const userLogin = async (req,res) => {

       try {
        
        const { email, password } = req.body;

        if(!email || !password){

        return res.status(400).json({message: "Prames Not Found"});

        }

         const user = await userModel.findOne({ email });
         
         if(!user){

            return res.status(400).json({message: "User Not Found"});

         }

         const isMatch = await bcrypt.compare(password, user.password);

           if(!isMatch){

             return res.status(401).json({message: "User Pssawor Not match"});

           }
             res.cookie('session', user._id, {
                    httpOnly: true,       
                    maxAge: 60 * 60 * 1000, 
                    secure: process.env.NODE_ENV === 'production'
                   });
            return res.status(200).json({message: "User Login Successfully",});

        
       } catch (error) {

        console.error(error);
        return  res.status(500).json({error: "Internal Server Error"});
        
       }




}






  export const currentUser = async (req,res) => {

       try {


        const cookie = req.cookies

      const user = await userModel.findById(cookie['session']);

       if(!user){

        return res.status(400).json({message: "user not found"});

        }

        return res.status(200).json({message: "current user",user});
 
        
       } catch (error) {
        
        console.error(error);
        return  res.status(500).json({error: "Internal Server Error"});
         

       }


}




export const userLogout = async (req,res) => {

    
         try {
         
          
          res.cookie('session', '', { maxAge: 0 });
          return res.status(200).json({message: "LogOut successfully"})
          
         } catch (error) {

          console.log(error);
          return  res.status(500).json({error: "Internal Server Error"});
         


         }



}
























export const userGet = async (req,res) => {
   
    try {

        const { name } = req.params;

       if(!name){

       return res.status(404).json({error: "User Name Not Found"});

       }
       
       const userGet = await userModel.findOne({name});

       return res.status(200).json({message: "User Detail",userGet});

        
    } catch (error) {
        
      console.error(error);
      return  res.status(500).json({error: "Internal Server Error"});

    }
       


}


export const userUpdate = async (req,res) => {
     
    try {
    
        const { name } = req.params;
        const { email,password } = req.body;
 
          

           const userUpdate = await userModel.updateOne(
            {name},
            {$set: { email,password}}
           )


           if(!userUpdate){

              return res.status(404).json({error: "User  Not update"})

           }
           
              
              return res.status(200).json({message: "User Update",userUpdate});
         

      } catch (error) {

      console.error(error);
      return  res.status(500).json({error: "Internal Server Error"});

        
    }



}


export const userDelete = async (req,res) => {

        try {

            const { name } = req.params;

            const userDelete = await userModel.deleteOne({name});


            if(!userDelete){
 
               return res.status(404).json({error: "User  Not delete"})
              
            }

            return res.status(200).json({message: "User Delete",userDelete});

          
        } catch (error) {
          
          console.error(error);
          return  res.status(500).json({error: "Internal Server Error"});


        }

    
}