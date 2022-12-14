import React, { useEffect, useState, useContext, useRef } from 'react';
import '../css/customer.css';
import { context } from '../data/services.context';
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from '../pictures/999dbcfc-721b-4a41-a61b-0ab8d40914f7.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    }
}));

export const Customer = () => {

    const navigateToMeeting = useNavigate();
    const classes = useStyles();
    const [services, setServices] = useContext(context);

    console.log("customer");
    console.log(services);
    return (
        <div className={classes.root}>
            <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }} >
                </ImageListItem>
                {services.map((item) => (
                    <ImageListItem key={item.id}>
                        <img src={image} alt={item.name} />
                        <ImageListItemBar
                            name={<span> {item.name}</span>}
                            title={<span> {item.name}</span>}
                            subtitle={<Link className={classes.link} to={`/newMeeting/${item.id}`}> make a meeting </Link>}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}