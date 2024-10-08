import React from "react";
import { AppBar, Toolbar, Typography, useTheme, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AuthNav from "../auth/AuthNav";
import PublicNav from "./PublicNav";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const user = useAuth();
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            {t("alexisWorld")}
          </Typography>
        </Box>
        {user ? <AuthNav /> : <PublicNav />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
