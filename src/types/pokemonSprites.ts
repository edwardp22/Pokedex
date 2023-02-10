export interface IPokemonSprites {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: IPokemonSprites;
}

interface GenerationV {
  "black-white": IPokemonSprites;
}

interface GenerationIv {
  "diamond-pearl": IPokemonSprites;
  "heartgold-soulsilver": IPokemonSprites;
  platinum: IPokemonSprites;
}

interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

interface RedBlue {
  front_default: string;
  front_gray: string;
  back_default: string;
  back_gray: string;
  front_transparent: string;
  back_transparent: string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Crystal {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  front_transparent: string;
  front_shiny_transparent: string;
  back_transparent: string;
  back_shiny_transparent: string;
}

interface Gold {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
  front_transparent?: string;
}

interface GenerationIii {
  emerald: OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface GenerationVii {
  "ultra-sun-ultra-moon": Home;
  icons: DreamWorld;
}

interface DreamWorld {
  front_default: string;
  front_female: null;
}

interface GenerationViii {
  icons: DreamWorld;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}
