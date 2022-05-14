import React from "react";
import AppBar from "./Appbar";
import Drawer from "./Drawer";

function App() {
    const [open, setOpen] = React.useState(false);

    const handleCloseOpen = () => {
        setOpen(!open);
    }

    return (
        <div>
            <AppBar handleDrawer={handleCloseOpen}/>
            <Drawer open={open}/>
        </div>
    );
}

export default App;
