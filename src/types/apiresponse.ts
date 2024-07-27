import { Message } from "@/model/user";

export interface apiresponse{
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Array<Message>;
    


}