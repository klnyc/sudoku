import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { GAME } from "../constants";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  setGame: (game: GAME) => void;
}

export const Sidebar = ({
  open,
  onClose,
  setGame,
}: SidebarProps): JSX.Element => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem onClick={() => setGame(GAME.Sudoku)}>
          <ListItemText primary="Sudoku"></ListItemText>
        </ListItem>
        <ListItem onClick={() => setGame(GAME.MouseTracker)}>
          <ListItemText primary="Mouse tracker"></ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
