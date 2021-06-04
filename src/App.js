import { Grid } from "@material-ui/core";

import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Grid
        className="glass"
        // container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Search />
      </Grid>
    </div>
  );
}

export default App;
