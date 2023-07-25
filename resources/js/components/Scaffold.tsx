import * as React from 'react';
import {Container, FormControlLabel, Grid, Radio, RadioGroup, SvgIcon, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {SwordType} from "../Package/Sword/Type/SwordType";
import SwordFactory from "../Package/Sword/SwordFactory";
import Sword from "../Package/Sword/Interface/Sword";

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

    useEffect(() => {
        espadaEscolhida && console.log(espadaEscolhida.imagemEspada());
    }, [espadaEscolhida]);

    return (
        <Container>
            <Grid container gap={3}>
                <Grid item>
                    <Typography variant={"h6"}>Teste de espadas</Typography>
                    <Typography variant={"body1"}>Escolha a espada que deseja testar:</Typography>
                    <RadioGroup name={"espada"}>
                        <FormControlLabel onChange={event => handleChange(event.target)} control={<Radio/>} label={"Madeira"} value={"madeira"}/>
                        <FormControlLabel onChange={event => handleChange(event.target)} control={<Radio/>} label={"Pedra"} value={"pedra"}/>
                        <FormControlLabel onChange={event => handleChange(event.target)} control={<Radio/>} label={"Bronze"} value={"bronze"}/>
                        <FormControlLabel onChange={event => handleChange(event.target)} control={<Radio/>} label={"Ferro"} value={"ferro"}/>
                    </RadioGroup>
                </Grid>
                <Grid item>
                    <Typography variant={"h6"}>Espada escolhida</Typography>
                    {espadaEscolhida ? (
                        <img src={`/img/${espadaEscolhida.imagemEspada()}`} />
                    ): <Typography variant={"body2"}>Nenhuma espada escolhida</Typography>}
                </Grid>
            </Grid>
        </Container>
    );
}
export default Scaffold;
