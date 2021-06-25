import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from './firebase';




import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';


import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 300,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));


const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};





export default function Feed() {
    const [posts, setPosts] = useState([]);

    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return (
        <div className="feed">
            {/*Header*/}
            <div className="feed_header">
                <h2>Ministries ,</h2>
            </div>



            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Ministry of Education
          </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Isurupaya
          </Typography>
                    </CardContent>


                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rate the Ministry</Typography>
                        <Rating
                            name="customized-icons"
                            defaultValue={4}
                            getLabelText={(value) => customIcons[value].label}
                            IconContainerComponent={IconContainer}
                        />
                    </Box>

                </div>
                <CardMedia
                    className={classes.cover}
                    image="https://www.dailynews.lk/sites/default/files/styles/node-teaser-default/public/news/2020/09/23/Ministry-of-education.jpg?itok=6H31Np8M"
                    title="Live from space album cover"
                />

            </Card>







            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Ministry of Public Administration
          </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Colombo 00700
          </Typography>
                    </CardContent>


                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rate the Ministry</Typography>
                        <Rating
                            name="customized-icons"
                            defaultValue={2}
                            getLabelText={(value) => customIcons[value].label}
                            IconContainerComponent={IconContainer}
                        />
                    </Box>

                </div>
                <CardMedia
                    className={classes.cover}
                    image="data:image/jpeg;base64,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"
                    title="Live from space album cover"
                />

            </Card>


            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Ministry of Health
          </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Colombo 01000
          </Typography>
                    </CardContent>


                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rate the Ministry</Typography>
                        <Rating
                            name="customized-icons"
                            defaultValue={3}
                            getLabelText={(value) => customIcons[value].label}
                            IconContainerComponent={IconContainer}
                        />
                    </Box>

                </div>
                <CardMedia
                    className={classes.cover}
                    image="https://cdn.newsfirst.lk/english-uploads/2020/01/6c9c0ddb-01f91fb2-ministry-of-health_850x460_acf_cropped_850x460_acf_cropped_850x460_acf_cropped.jpg"
                    title="Live from space album cover"
                />

            </Card>




        </div>
    );


}
