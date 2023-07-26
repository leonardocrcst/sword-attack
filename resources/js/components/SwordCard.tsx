import * as React from 'react';
import Sword from "../Package/Sword/Interface/Sword";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface SwordCardProps {
    sword: Sword;
}

const SwordCard = (props: SwordCardProps) => {
    const sword = props.sword;
    return (
        <Card sx={{width: 300}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant={"h5"} component={"div"}>
                        {sword.titulo()}
                    </Typography>
                </CardContent>
                <CardMedia
                    sx={{objectFit: "none"}}
                    component={"img"}
                    height={"80"}
                    image={`/img/${sword.imagemEspada()}`}
                    alt={sword.material}
                />
                <CardContent>
                    <Typography variant={"body1"} component={"p"}>
                        Dano cortante: {sword.ataqueCortante()}
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        Dano perfurante: {sword.ataquePerfurante()}
                    </Typography>
                    <Typography variant={"body1"} component={"p"}>
                        Dano contundente: {sword.ataqueContundente()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default SwordCard;
