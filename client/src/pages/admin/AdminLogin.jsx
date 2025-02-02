import { useInputValidation } from "6pp";
import {
    Button,
    Container,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import { gradbr } from "../../constants/color";
import { Navigate } from "react-router-dom";


const isAdmin = true;

const AdminLogin = () => {
  

  const secretKey = useInputValidation("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  if (isAdmin) return <Navigate to='/admin/dashboard' />

  return (
    <div
      style={{
        backgroundImage: gradbr,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 24,
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            action=""
            style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />
            <Button
              sx={{
                marginTop: "1rem",
                backgroundImage: "linear-gradient(to left,brown, darkblue)",
                transition: "0.1",
                ":hover": { transform: "scale(1.01)", boxShadow: 9 },
                boxShadow: 5,
              }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
