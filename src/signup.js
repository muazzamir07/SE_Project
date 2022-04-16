import './App.css';
import { TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import {Button} from "@material-ui/core"

function SignUp() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
      console.log("retry");
  };
;




  return (
      
      <div style={{backgroundColor:'',borderColor:'crimson',border:3 }}>              
      <img src="https://loremflickr.com/320/240" />
      <form onSubmit={handleSubmit((data)=>{ 
          if(data.password!=data.re_password){
          alert("password dont match")
            }
          else  
          alert("password match")
          
                  })}>
<h1>SIGN UP</h1>
      
                  <PersonOutlineIcon  fontSize="medium" /><a1> </a1><bt></bt><TextField {...register("username")} placeholder="-USER-NAME-" 
                  style={{backgroundColor:'white', color:'white' ,size:"large"}} /><br />
                  <MailOutlineIcon /><a1> </a1><TextField {...register("email")} placeholder="-EMAIL-" /><br />
                  <PasswordOutlinedIcon /><a1> </a1><TextField {...register("password")} name ='password' placeholder="-PASSWORD-" type="password" /><br />
                  <PasswordOutlinedIcon /><a1> </a1><TextField {...register("re_password")}  name='re_password' placeholder="-RETYPE PASSWORD-" type="password" 
                   /> <br/>

                  <Button style={{textAlign:'center',align:'center'}} type="submit">Register</Button>
                
              </form>
      </div>

        );
       
              }
              
export default SignUp;
        
