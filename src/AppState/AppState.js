import React, { useState, useEffect } from "react";
import AppNavigation from "../AppNavigation/AppNavigation"

export default function AppState() {
    const IMAGES = {
        image0: "http://i.legendas.tv/poster/140x207/legendas_tv_20220922010141.jpg",
        image1: "http://i.legendas.tv/poster/140x207/legendas_tv_20220922010141.jpg",
        image2: "http://i.legendas.tv/poster/140x207/legendas_tv_20220922010141.jpg",
        image3: "http://i.legendas.tv/poster/140x207/legendas_tv_20220922010141.jpg",
        image4: "http://i.legendas.tv/poster/140x207/legendas_tv_20220922010141.jpg",
        image5: "http://i.legendas.tv/poster/140x207/legendas_tv_20220922010141.jpg",
        image6: "http://i.legendas.tv/poster/140x207/legendas_tv_20220922010141.jpg"
      };
      
    const [allcards, setAllcards] = useState(
        [
            {cardID: 0, cardImg: IMAGES.image0},
            {cardID: 1, cardImg: IMAGES.image1},
            {cardID: 2, cardImg: IMAGES.image2},
            {cardID: 3, cardImg: IMAGES.image3},
            {cardID: 4, cardImg: IMAGES.image4},
            {cardID: 5, cardImg: IMAGES.image5},
            {cardID: 6, cardImg: IMAGES.image6}
        ]
    );
    const [card, setcard] = useState({});

    const AppState = {
        allcards, setAllcards,
        card, setcard
    }

    return <AppNavigation AppState={AppState} />
}