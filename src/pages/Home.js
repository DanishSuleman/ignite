import React, { useEffect } from "react";
//Redux
import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// //Game Detail
// import { getGameDetailUrl } from "../api";
// import axios from "axios";

const Home = () => {
  //Event Handlers
  // const fetchGameDetailHandler = (game_id) => {
  //   const gameDetail = axios.get(getGameDetailUrl(game_id));
  //   console.log(gameDetail);
  // };
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Extract the data from State
  const { popularGames, newGames, upcomingGames } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames.map((game) => (
          <Game
            id={game.id}
            key={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
            // onclick={() => getGameDetailUrl(game.id)}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popularGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
