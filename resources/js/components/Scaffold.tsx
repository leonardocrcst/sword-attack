import * as React from 'react';
import {useEffect, useState} from 'react';
import {Container, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import {SwordType} from "../Package/Sword/Type/SwordType";
import SwordFactory from "../Package/Sword/SwordFactory";
import Sword from "../Package/Sword/Interface/Sword";
import SwordCard from "./SwordCard";

const Scaffold = () => {
    const [
        espadaState,
        setEspadaState
    ] = useState<SwordType>()
    const [
        espadaEscolhida,
        escolherEspada
    ] = useState<Sword>()

    const handleChange = (espada) => {
        if ("value" in espada) {
            const tipoEspada: SwordType = espada.value
            setEspadaState(tipoEspada)
        }
    }

    useEffect(() => {
        if (espadaState) {
            let novaEspada = new SwordFactory().createSword(espadaState);
            escolherEspada(novaEspada);
        }
    }, [espadaState]);

    return (
        <Container>
            <Grid container gap={3}>
                <Grid item>
                    <Typography variant={"h6"}>Teste de espadas</Typography>
                    <Typography variant={"body1"}>Escolha a espada que deseja testar:</Typography>
                    <RadioGroup name={"espada"}>
                        {['madeira', 'pedra', 'bronze', 'ferro'].map((item) => {
                            // @ts-ignore
                            return <FormControlLabel key={item} control={<Radio />} onChange={event => handleChange(event.target)} label={item.capitalize()} value={item} />
                        })}
                    </RadioGroup>
                </Grid>
                {espadaEscolhida && (
                    <Grid item>
                        <SwordCard sword={espadaEscolhida}/>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}
export default Scaffold;
