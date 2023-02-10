import React from "react";

import {
  Card as CardMUI,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { Star } from "../";
import { spritesBaseURL } from "../../shared";
import { TPokemon } from "../../types";
import { IPokemonSprites } from "../../types/pokemonSprites";
import styles from "./card.module.css";

export default function Card({
  pokemon,
  onClick,
}: {
  pokemon: TPokemon;
  onClick: (pokemon: TPokemon) => void;
}) {
  const { star, title, imageStyle } = styles;
  const { name, pokemon_v2_pokemonsprites } = pokemon;
  const sprites: IPokemonSprites = pokemon_v2_pokemonsprites.length
    ? JSON.parse(pokemon_v2_pokemonsprites[0].sprites)
    : undefined;
  const oficialArtwork = sprites.other?.["official-artwork"].front_default;
  const imageURL = spritesBaseURL + oficialArtwork?.replaceAll("/media/", "");

  return (
    <Grid item sm={3}>
      <CardMUI>
        <CardContent>
          <div className={star}>
            <Star onClick={() => onClick(pokemon)} />
          </div>

          <Typography variant="h6" className={title}>
            {name}
          </Typography>

          <CardMedia className={imageStyle} image={imageURL} />
        </CardContent>
      </CardMUI>
    </Grid>
  );
}
