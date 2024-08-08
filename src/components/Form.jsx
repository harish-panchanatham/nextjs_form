import { TextField, Select, MenuItem, Button, Typography } from "@mui/material";
import { useState } from "react"

export default function Form() {

    const [formData, setFormData] = useState({
        name : "",
        mailId : "",
        phoneNo : "",
        option : "",
        message : ""
    });
    const [sentSuccessfully, setSentSuccessfully] = useState(false);

    const formItem = {
        width : "80%"
    }

    const handleClick = () => {
        setSentSuccessfully(true);
        console.log(formData)
        setFormData({
            name : "",
            mailId : "",
            phoneNo : "",
            option : "",
            message : ""
        })
    }

    return (
        <>

        <div style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius : "5px",
            display : "flex",
            flexDirection : "column",
            width : "350px",
            height : "370px",
            justifyContent : "space-evenly",
            alignItems : "center",
            marginTop : "100px",
            paddingTop : "30px",
            paddingBottom : "30px"
        }}>
            <TextField size="small" style={formItem} id="name" placeholder="name" value={formData.name} onChange={(e)=> {setFormData((prevData) => ({...prevData, name: e.target.value}) )}} />

            <TextField size="small" style={formItem} id="email" placeholder="email" value={formData.mailId} onChange={(e)=> {setFormData((prevData) => ({...prevData, mailId: e.target.value}) )}} />

            <TextField size="small" style={formItem} id="phone" placeholder="phone" value={formData.phoneNo} onChange={(e)=> {setFormData((prevData) => ({...prevData, phoneNo: e.target.value}) )}} />

            <Select size="small" style={formItem} id="options" name="options" value={formData.option} required onChange={(e)=> {setFormData((prevData) => ({...prevData, option: e.target.value}) )}}>
                <MenuItem value="" disabled>Select an option</MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
            </Select>

            <TextField multiline rows={3}  style={{resize : "none", width : "80%"}} name="message" id="message" placeholder="write your message" value={formData.message} onChange={(e)=> {setFormData((prevData) => ({...prevData, message: e.target.value}) )}} />

            <Button variant="contained" style={{
                ...formItem,
                backgroundColor : "orange",
                boxShadow : "none",
                borderRadius : "50px"
            }} id="" onClick={handleClick}>submit</Button>

        </div>
        <br />
        <br />
        {sentSuccessfully ? <Typography>message successfully sent</Typography> : ""}

        </>
    )
}