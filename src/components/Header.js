import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import "./head.css"

function Header ({title , subtitle}){
    const theme = useTheme();
    const colors =  tokens(theme.palette.mode)
    return(
        <Box mb="30px">
         <Typography className="sze"
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}>
            {title}
          </Typography>
          <Typography className="qqq"  variant="h5" color={colors.greenAccent[400]}>
            {subtitle}
           </Typography>
        </Box>
    )
}

export default Header;