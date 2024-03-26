import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Categories from '../components/Categories';
import SeacrhBar from '../components/home/SeacrhBar';
import Bookmark from './Bookmark';

export default function HomeScreen() {
    const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

    const handleBookmark = (book) => {
        setBookmarkedBooks([bookmarkedBooks, book]);
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView
                showVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: hp(0) }}
                style={{ paddingVertical: hp(2) }}>

                <View>
                    <SeacrhBar setSearchText={(value) => console.log(value)} />
                </View>

                {/* Content lainnya */}
                <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: hp(2) }}>Hello Fatiq</Text>
                    <View>
                        <Text style={{ fontSize: hp(3) }}>Pilih Buku Sesuai Selera Anda</Text>
                    </View>
                </View>

                {/*Content */}
                <View>
                    <Categories handleBookmark={Bookmark} />
                </View>
            </ScrollView>
        </View>
    );
}