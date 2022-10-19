import { NextPage } from "next";
import { useRouter } from "next/router";
import PalettePage from "../src/components/PalettePage/PalettePage.component";

const Palette: NextPage = () => {
  const router = useRouter();

  const { palette: paletteQuery } = router.query;
  const palette =
    paletteQuery && typeof paletteQuery === "string"
      ? JSON.parse(paletteQuery)
      : undefined;

  return <PalettePage palette={palette} />;
};

export default Palette;
