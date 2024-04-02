import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, 
  heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../assets/Colors/Colors';

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  imageAndTextContainer: {
    alignItems: 'center',
  },
  image: {
    width: wp(50),
    height: wp(50),
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: wp(6),
    marginTop: 20,
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingVertical: hp(2),
  },
  scrollViewContent: {
    paddingBottom: 50,
    paddingTop: hp(0),
  },
  searchBarContainer: {
    marginHorizontal: 10,
  },
  contentContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: hp(2),
  },
  titleText: {
    fontSize: hp(3),
  },
  categoriesContainer: {
    marginHorizontal: 10,
  },
});

export const srchStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: Colors.gray,
    padding: 8,
    borderRadius: 10,
  },
  input: {
    flex: 1,
  },
});

export const profilStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export const bkmrkStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  bookmarkListContainer: {
    marginTop: 10,
  },
  bookmarkItemContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  bookmarkImage: {
    width: '100%',
    height: hp(35),
    borderRadius: 15,
    marginVertical: 5,
  },
  bookmarkTitle: {
    textAlign: 'center',
    marginTop: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export const ctgrStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: hp(35),
    borderRadius: 15,
    marginVertical: 5,
  },
  titleText: {
    textAlign: 'center',
    marginTop: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  columnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 10,
  },
});

export const bkdtlStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: 500,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
  },
  detailsContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genre: {
    fontSize: 18,
    fontStyle: 'bold',
    marginBottom: 10,
  },
  synopsisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  synopsisText: {
    marginBottom: 10,
    textAlign: 'justify',
  },
  price: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: Colors.yellow,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: Colors.white,
  },
});

export const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  itemImage: {
    width: wp(30),
    height: wp(30),
    marginRight: wp(5),
  },
  itemDetailsContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  itemAuthor: {
    fontSize: wp(3.5),
    color: Colors.gray,
  },
  itemPrice: {
    fontSize: wp(4),
    fontWeight: 'bold',
    marginTop: hp(1),
  },
});