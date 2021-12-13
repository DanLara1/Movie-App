import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const resp = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=ab1b7ed23a01c9bcca197c9c76f03757');
  return(resp.data.results);
};

const App = () => {
  const [movie, setMovie] = useState('');

  useEffect(() => {
  getPopularMovies().then(movies => {
    setMovie(movies[0]);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
         text{movie.original_title}
      </Text>
    </View>
  );
}

export default App;