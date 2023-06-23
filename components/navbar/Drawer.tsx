import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import { useTranslations } from "next-intl";

export const DrawerContent = ({
  url,
  mobileOpen,
  navItems,
  onRedirect,
  handleDrawerToggle,
}: {
  url: string;
  mobileOpen: boolean;
  navItems: any[];
  onRedirect: any;
  handleDrawerToggle: any;
}) => {
  const drawerWidth = 240;
  const langs = useTranslations("navbar");

  return (
    <Drawer
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  className={`${url === item.url && "text-gradient"}`}
                  onClick={() => onRedirect(item.url)}
                  primary={langs(item.label)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
