import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from './firebase';


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export default function Feed() {
    const [posts, setPosts] = useState([]);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return (
        <div className="feed">
            {/*Header*/}
            <div className="feed_header">
                <h2>Hello There,</h2>
            </div>

            {/* Crad One */}
            <Card className={classes.root}>
                <CardHeader

                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="The second school term is commenced tomorrow (19) following health instructions strictly…"
                    subheader="TUESDAY, 20 APRIL 2021"
                />
                <CardMedia
                    className={classes.media}
                    image="https://www.unicef.org/srilanka/sites/unicef.org.srilanka/files/styles/hero_desktop/public/DSCF6912.jpg?itok=vbZf_Fq9"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The arrangements have been made to start the second term of all government schools from tomorrow (19) strictly following the instructions
                        provided by the health authorities about the starting the schools and also considering the instructions given in the circular issued by the
                        ministry of education in March under the current situation of health protection.
          </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>


                        <Typography paragraph>
                            The Secretary of Education Professor Kapila Perera mentions that the actions must be taken according to the same procedures
                            implemented in the previous school term until new recommendations are submitted by the Director General of Health regarding
                            the calling students to the schools. Accordingly the instructions have been given to take all students to the schools if the
                            number of students in one class is less than 15.
                            If the number of students is between 16 and 30, they must be called as two groups and if it exceeds 30 they must be taken as 3 groups.
            </Typography>
                        <Typography paragraph>
                            Thankfulness is extended to health, transport, defense and various other sectors for their
                            support given so far to take children to the schools while following the health instructions such as maintaining social distance,
                            washing hands, wearing face masks, not exchanging food and consuming only the food brought from home.
                            The secretary of education further stated that he expects everybody will act in a responsible manner in the future also.
            </Typography>
                        <Typography>
                            The secretary of education further pointed out that it is requested from all sectors to extend their support to minimize the shortcomings
                            in the process of the decision and implementing the procedure for taking children to the schools as a country under the instructions and full
                            guidance of the President,
                            the Prime minister and the Minister of Education, instead of criticizing these activities..
            </Typography>
                    </CardContent>
                </Collapse>
            </Card>


            {/* \\Card 2 */}
            <Card className={classes.root}>
                <CardHeader

                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Advanced Level results will be issued within one week. –The Minister of Education Professor G.L. Peiris"
                    subheader="THURSDAY, 29 APRIL 2021"
                />
                <CardMedia
                    className={classes.media}
                    image="https://moe.gov.lk/wp-content/uploads/2021/04/3K1A3218-1.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The Minister of Education Professor G.L. Peiris said that it will be possible to issue the results of G.C.E. Advanced Level Examination within seven days from today. The minister stated this while participating in a media discussion in Colombo.
                        Further expressing his ideas at this occasion the minister said,
          </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                        <Typography paragraph>
                            Further expressing his ideas at this occasion the minister said,
                            The advanced level exam was held and finished in the first week of November last year.
                            362,000 male and female students sat for this exam. We have been able to issue the  results within one week time due
                            to the dedication of all the officers including the commissioner general of examinations and the marking officers. Because of the corona pandemic the practical tests of aesthetic and technology subjects had to be postponed. And also some of the applicants became corona patients. However, our appreciation and respect go to all who did all this efficiently. Therefore our children will be able to enter the universities in September this year without wasting one year. We express our happiness for being able to complete this activity in a situation the covid pandemic has spread all over the world. And also we hope to open the universities island wide on 10th of May. Until then the lectures will be conducted online.
            </Typography>
                        <Typography paragraph>
                            We know that anything loss in life can be recovered. But the loss of education for a child cannot be recovered.
                            It was decided to stop functioning of all schools, pre-schools, Pirivenas and tuition classes in the country from last
                            Friday the 30th of April. We have analyzed this situation daily. The decisions are being taken according to the instructions of
                            the director general of health with the continuous coordination daily with all the provincial directors of education and the zonal
                            directors of education. Considering all these things a decision will be taken on Sunday 02nd of May about the reopening of the
                            schools next week, he also said.
            </Typography>

                    </CardContent>
                </Collapse>
            </Card>



            {/* Card 3 */}

            <Card className={classes.root}>
                <CardHeader


                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="It is a false news item currently spreading over the social media saying that the vacation after the first term of the government schools starts tomorrow (07.04.2021).S"
                    subheader="THURSDAY, 08 APRIL 2021"
                />
                <CardMedia
                    className={classes.media}
                    image="http://speakermoore.com/wp-content/uploads/2019/09/FakeNews.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        It is a false news item currently spreading over the social media saying that the vacation
                        after the first term of the government schools starts tomorrow (07.04.2021).
          </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                        <Typography paragraph>
                            According to the circular ‘school terms 2021’ (No. 36/2020) it has been scheduled to start the vacation after the first
                            term in all government schools (Sinhala, Tamil and Muslim) on 09.04.2021.Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
            </Typography>

                        <Typography paragraph>
                            Furthermore, according to the same circular all Sinhala and Tamil schools are started on
                            19.04.2021 for the second term and the Muslim schools will start on 17.05.2021.
            </Typography>
                        <Typography>
                            Secretary

                            The Ministry of Education
            </Typography>
                    </CardContent>
                </Collapse>
            </Card>


        </div>
    );


}


