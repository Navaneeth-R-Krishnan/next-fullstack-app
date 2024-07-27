import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmails"
import { apiresponse } from "@/types/apiresponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifycode:string

): Promise<apiresponse>{
    try{

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'nextfullstackapp | Verification code',   
            react: VerificationEmail({username, otp:verifycode}), 
          });
        return{success:true,message:"Successfully sent verification email"}


    }catch(Emailerror){
        console.error("Error sending verification email",Emailerror);
        return{success:false,message:"Failed to send verification email"}

    }
}
