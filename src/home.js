import './App.css';
import { Button } from '@mui/material';

function Home()
{
    return(
        <html>
        <body class='b'>
        
        <div class='main'>

        <div class="div1">
            <h1>
                AUTO DOCTOR
            </h1>

            <h2>
                YOUR FAMILY AT YOUR SERVICE
            </h2>
            <Button variant="contained" style={{color:'white', backgroundColor:'green',textAlign:'center'}} >
            Make an Appointment
            </Button>

            </div>
            <div class="div2">
            
            <h1>
                VEHICLE REPAIR SERVICES
            </h1>

            <h2>
                WE ARE ONE OF THE LEADING AUTO REPAIR SHOPS SERVING CUSTOMERS AROUND THE AREA. ALL THE REPAIR SERVICES PERFORMED BY HIGHLY 
                QUALIFIED MECHANICS.
            </h2>
            
            
            </div>
        </div>
        </body>
        </html>
    );
}
export default Home;