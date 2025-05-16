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



}


export const userUpdate = async (req,res) => {




}


export const userDelete = async (req,res) => {



    
}