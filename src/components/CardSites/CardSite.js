import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bgImg from '../../img/bg.jpg';
import futureeats from '../../img/FutureEats.jpg'
import labex from '../../img/labex.jpg';


function CardSite() {
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

      const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea target="_blank" href="http://general-limit.surge.sh">
                    <CardMedia
                    className={classes.media}
                    image= {futureeats}
                    title="Future Eats"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Future Eats
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Site no estilo iFood feito para projeto da Labenu
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root}>
                <CardActionArea target="_blank" href="http://sparkling-clock.surge.sh/">
                    <CardMedia
                    className={classes.media}
                    image= {labex}
                    title="Labex"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Labex
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Site simples de viagens espaciais feito para projeto da Labenu
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
          
            <Card className={classes.root}>
                <CardActionArea target="_blank" href="http://spiteful-stew.surge.sh/">
                    <CardMedia
                    className={classes.media}
                    image= {bgImg}
                    title="LabEddit"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        LabEddit
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Site no estilo Reddit feito em projeto da Labenu
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )

}

export default CardSite;