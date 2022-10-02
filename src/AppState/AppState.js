import React, { useState, useEffect } from "react";
import AppNavigation from "../AppNavigation/AppNavigation"

export default function AppState() {
    const IMAGES = {
        image1: require("../../assets/poster_0.jpg"),
        image2: require("../../assets/poster_1.jpg"),
        image3: require("../../assets/poster_2.jpg"),
        image4: require("../../assets/poster_3.jpg"),
        image5: require("../../assets/poster_4.jpg"),
        image6: require("../../assets/poster_5.jpg"),
        image7: require("../../assets/poster_6.jpg"),
        image7: require("../../assets/poster_7.jpg"),
        image7: require("../../assets/poster_8.jpg")
      };
      
    const [allcards, setAllcards] = useState(
        [
            {cardID: 0, cardImg: IMAGES.image0},
            {cardID: 1, cardImg: IMAGES.image1},
            {cardID: 2, cardImg: IMAGES.image2},
            {cardID: 3, cardImg: IMAGES.image3},
            {cardID: 4, cardImg: IMAGES.image4},
            {cardID: 5, cardImg: IMAGES.image5},
            {cardID: 6, cardImg: IMAGES.image6},
            {cardID: 7, cardImg: IMAGES.image7},
            {cardID: 8, cardImg: IMAGES.image8}
        ]
    );
    const [card, setcard] = useState({});

    const AppState = {
        allcards, setAllcards,
        card, setcard
    }

    return <AppNavigation AppState={AppState} />
}