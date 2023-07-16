import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: 250,
    alignSelf: 'center',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'black',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'black',
  },
  movieContainer: {
    marginTop: 100,
  },
  movieContainerRow: {
    width: 300,
    marginVertical: 5,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  dropdownTitle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  dropDownImage: {
    width: 50,
    height: 50,
  },
  dropdown: {
    width: 300,
    height: 400,
    backgroundColor: '#f7f5f2',
    top: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'center',
  },
  searchBox: {
    width: 300,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    backgroundColor: '#f7f5f2',
    top: 20,
  },
});
