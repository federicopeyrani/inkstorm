import styles from "./PalettePage.module.scss";

export type PalettePageProps = {
  palette?: Palette;
};

type Palette = {
  colorPalettes: {
    name: string;
    colors: string[];
  }[];
};

const PalettePage: React.FC<PalettePageProps> = ({ palette }) => (
  <div className={styles.PalettePage}>
    {palette?.colorPalettes.map(({ colors }, index) => (
      <div key={index} className={styles.colorPalette}>
        {colors.map((color, index) => (
          <div key={index} className={styles.color} style={{ background: color }}>
            {color}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default PalettePage;
