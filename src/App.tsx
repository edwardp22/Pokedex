import React from "react";

import { CssBaseline, Grid, Typography } from "@mui/material";

import usePokemon from "./api/pokemon";
import { Card } from "./common";

function App() {
  const { data, loading } = usePokemon();

  if (loading) return <Typography variant="body1">Loading...</Typography>;

  return (
    <>
      <CssBaseline />

      <Grid container spacing={1}>
        {data.map((pokemon) => (
          <Card
            key={"pokemon" + pokemon.id}
            pokemon={pokemon}
            onClick={(pokemon) => console.log(pokemon)}
          />
        ))}
      </Grid>
    </>
  );
}

export default App;
