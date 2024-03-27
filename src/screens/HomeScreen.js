import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Categories from '../components/Categories';
import SeacrhBar from '../components/home/SeacrhBar';
import Bookmark from './Bookmark';

const HomeScreen = () => {
    const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

    const handleBookmark = (book) => {
        setBookmarkedBooks([bookmarkedBooks, book]);
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
                style={styles.scrollView}>

                <View style={styles.searchBarContainer}>
                    <SeacrhBar setSearchText={(value) => console.log(value)} />
                </View>

                {/* Content lainnya */}
                <View style={styles.contentContainer}>
                    <Text style={styles.greetingText}>Hello Fatiq</Text>
                    <View>
                        <Text style={styles.titleText}>Pilih Buku Sesuai Selera Anda</Text>
                    </View>
                </View>

                {/*Content */}
                <View style={styles.categoriesContainer}>
                    <Categories handleBookmark={Bookmark} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default HomeScreen;
