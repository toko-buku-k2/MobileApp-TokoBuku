import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Categories from '../components/Categories';
import Bookmark from './Bookmark';
import { homeStyles } from '../components/Style';

const HomeScreen = () => {
    const [bookmarkedBooks, setBookmarkedBooks] = useState([]);
    

    const handleBookmark = (book) => {
        setBookmarkedBooks([bookmarkedBooks, book]);
    }

    return (
        <View style={homeStyles.container}>
            <ScrollView
                showVerticalScrollIndicator={false}
                contentContainerStyle={homeStyles.scrollViewContent}
                style={homeStyles.scrollView}>

                {/* Content lainnya */}
                <View style={homeStyles.contentContainer}>
                    <Text style={homeStyles.greetingText}>Hello Seseorang</Text>
                    <View>
                        <Text style={homeStyles.titleText}>Pilih Buku Sesuai Selera Anda</Text>
                    </View>
                </View>

                {/*Content */}
                <View style={homeStyles.categoriesContainer}>
                    <Categories handleBookmark={Bookmark} />
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;