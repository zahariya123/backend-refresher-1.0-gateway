/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class UserService{
    async getUser(email: string){
         let url = `http://localhost:3000/user/email?email=${email}`
         let fetchedUser =(await axios.get(url)).data
         return fetchedUser
    }
}