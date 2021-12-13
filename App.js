import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getPopularMovies } from './services/services';

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
         Title: {movie.original_title}
      </Text>
    </View>
  );
}

export default App;