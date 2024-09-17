import { Box, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography p={'2rem'} variang='h5' textAlign={'center'}>Select a friend to start chatting...</Typography>
    </Box >
  )
};

export default AppLayout()(Home);
