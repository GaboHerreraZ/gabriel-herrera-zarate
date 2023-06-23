import Image from "next/image";
import { Skill } from "../../interfaces/Skill";
import { Typography, Rating, Grid } from "@mui/material";
import { Zoom } from "react-awesome-reveal";

export const CardSkill = ({ item }: { item: Skill }) => {
  return (
    <Zoom>
      <Grid display="grid" justifyItems="center" sx={{ textAlign: "center" }}>
        <Typography mb={2}>{item.title}</Typography>
        <Image
          alt=""
          width={item.width}
          height={item.height}
          src={item.svg}
        ></Image>
        <Rating
          size="small"
          sx={{ marginTop: "0.5rem" }}
          name="read-only"
          value={item.rating}
          readOnly
          precision={0.5}
        />
      </Grid>
    </Zoom>
  );
};
