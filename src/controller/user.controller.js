/**
 * 
 * 
 */

import { userModel } from "../model/user.model.js"

export const userRegister = async (req,res) => {

    try {

        const {name,password,email} = req.body;

        if(!name || !password || !email){

          return  res.status(404).json({error: "All params Not Found"});

        }

        const user = await userModel.create({name,password,email});

        return res.status(200).json({message: "User Register Successfully",user});
        
    } catch (error) {
       
        console.error(error);
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