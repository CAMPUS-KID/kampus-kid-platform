import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import UsersIcon from "@mui/icons-material/Person";
import GradeIcon from "@mui/icons-material/Grade";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SiteIcon from "@mui/icons-material/Park";
import SchoolIcon from "@mui/icons-material/School";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { AccountCircle } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { CurrentUserAtom } from "../../../../state";
import { DefaultCurrentUser } from "../../../../state/CurrentUserAtom";
import { useLocation, useNavigate } from "react-router-dom";
import { StorageAssistant } from "../../assistants";
import { StorageKeyEnum, RoleEnum } from '../../enums'

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface MenuOption {
  name: string,
  route: string,
  icon: any
}

export default function Page({
  children,
  title,
}: {
  children: React.ReactElement | React.ReactElement[];
  title: string;
}) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentUser, setCurrentUser] = useRecoilState(CurrentUserAtom);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    StorageAssistant.removeItem(StorageKeyEnum.AUTHENTICATION);
    setCurrentUser(DefaultCurrentUser);
    navigate('/');
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sharedMenuOptions: MenuOption[] = [
    { name: 'Dashboard', route: '/', icon: <DashboardIcon /> }
  ];

  const menuOptions: MenuOption[] = currentUser.role === RoleEnum.ADMIN ?
    [
      ...sharedMenuOptions,
      { name: 'Sites', route: '/sites', icon: <SiteIcon /> },
      { name: 'Faculties', route: '/faculties', icon: <SchoolIcon /> },
      { name: 'Users', route: '/users', icon: <UsersIcon /> }
    ] :
    [
      ...sharedMenuOptions,
      { name: 'Grades', route: '/grades', icon: <GradeIcon /> }
    ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography fontWeight="bold" variant="h6" noWrap component="div">
            {title}
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography variant="h6" noWrap component="div">
                {currentUser.email}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography fontWeight="bold" variant="h6" noWrap component="div" style={{ marginRight: 'auto' }}>
            Campus Kid
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuOptions.map(({ name, route, icon }) => (
            <ListItem key={name} disablePadding style={{ background: route === location.pathname ? '#1976d2' : undefined, color: route === location.pathname ? 'white' : undefined }}>
              <ListItemButton onClick={() => route !== location.pathname && navigate(route)}>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
