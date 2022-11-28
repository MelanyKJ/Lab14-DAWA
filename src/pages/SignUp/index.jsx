import {useState} from "react";
import {Box, Paper, Typography, TextField, Button} from "@mui/material";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import { post } from "../../services";

const SignUp = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setValues({
            ...values,
            [name]:value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await post("users/signup", values);

        if (response.ok){
            Swal.fire({
                text: "Usuario creado correctamente",
                icon:"success"
            })
        }else{
            Swal.fire({
                text:"Error",
                icon:"error"
            })
        }
    };

    return (
        <Box
            display="flex"
            height = "100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Paper
                sx={{
                    width:300,
                }}
            >
                <Box p={3} component="form" onSubmit={handleSubmit} method="post">
                    <Typography textAlign="center" variant="h4">Sign Up</Typography>
                    <Box my={3}>
                        <TextField
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            label="Full name"
                            fullWidth
                            required
                        />
                    </Box>
                    <Box my={3}>
                        <TextField
                            name="email"
                            onChange={handleInputChange}
                            value={values.email}
                            label="Email"
                            fullWidth
                            required
                        />
                    </Box>
                    <Box my={3}>
                        <TextField
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            type="password"
                            label="Password"
                            fullWidth
                            required
                        />
                    </Box>
                    <Box my={3}>
                        <Button type="submit" fullWidth variant="outlined">
                            Registrar
                        </Button>
                    </Box>
                    <Box>
                        <Button
                        component={Link}
                        to="/login"
                        sx={{
                            textTransform:"capitalize",
                        }}
                        >
                            Inicia sesion

                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default SignUp;