import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {fetchMovieDetails} from '../../Services/ImdbService';
import {MovieList, MovieObject} from '../../types';

const DEFAULT_DATA = {
  Title: 'Gol Maal',
  Year: '1979',
  imdbID: 'tt0079221',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjA4OTczODgxNF5BMl5BanBnXkFtZTgwMDAzMTU2NDE@._V1_SX300.jpg',
};

const MovieDescription = () => {
  const [movieDataArray, setMovieDataArra] = useState<MovieList>();
  const [showMovieDetail, setShowMoviewDetails] =
    useState<MovieObject>(DEFAULT_DATA);
  const [movieName, setMovieName] = useState<string>('');
  const movieRef = useRef<(search: string) => void>();
  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    movieRef.current = debounce(getMoviewData, 50);
  }, []);

  const debounce = (fn: (val: string) => void, waitTime: number) => {
    let timeout: NodeJS.Timeout | undefined;
    return (search: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.call(this, search);
      }, waitTime);
    };
  };

  const getMoviewData = async (search: string) => {
    const getData = await fetchMovieDetails(search);
    setMovieDataArra(getData);
  };

  useEffect(() => {
    movieName !== '' && movieRef.current && movieRef.current(movieName);
  }, [movieName]);

  const movieDescription = (
    <View style={styles.movieContainer}>
      <Text style={styles.title}>{showMovieDetail.Title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: showMovieDetail.Poster,
        }}
      />
      <Text style={styles.text}>{`Type ${showMovieDetail.Type}`}</Text>
      <Text style={styles.text}>{`Realease year ${showMovieDetail.Year}`}</Text>
    </View>
  );

  const dropDown = (
    <ScrollView style={styles.dropdown}>
      {movieDataArray?.error ? (
        <>
          <Text style={styles.title}>
            {`Error: ${movieDataArray?.error}, please type more letters for better result`}
          </Text>
        </>
      ) : (
        movieDataArray?.movieSearchResult &&
        movieDataArray.movieSearchResult.map((value: MovieObject) => (
          <TouchableOpacity
            style={styles.movieContainerRow}
            key={value.imdbID}
            onPress={() => {
              setShowMoviewDetails(value);
              setMovieName('');
              setMovieDataArra(undefined);
            }}>
            <View style={styles.dropdownTitle}>
              <Image
                style={styles.dropDownImage}
                source={
                  value.Poster !== 'N/A'
                    ? {uri: value.Poster}
                    : require('../../assets/imageNotAvailable.jpg')
                }
              />
              <Text style={styles.text}>{value.Title}</Text>
            </View>
            <Text style={styles.text}>{value.Year}</Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );

  const searchBox = (
    <View style={styles.searchBox}>
      <TextInput
        ref={searchInputRef}
        placeholder="Search movie name"
        value={movieName}
        onChangeText={(value: string) => {
          setMovieName(value);
        }}
      />
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>Movies11</Text>
      {searchBox}
      {searchInputRef.current?.isFocused() && dropDown}
      {!searchInputRef.current?.isFocused() && movieDescription}
    </View>
  );
};

export default MovieDescription;
