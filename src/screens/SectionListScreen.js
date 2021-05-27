import React from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import {Header} from '../components/Header';
import {ItemSeparator} from '../components/ItemSeparator';
import {casas} from '../data';

export const SectionListScreen = () => {
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        ListHeaderComponent={<Header title="SectionList" />}
        ListFooterComponent={
          <Header title={`Cantidad de casas: ${casas.length}`} />
        }
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        stickySectionHeadersEnabled
        renderSectionHeader={({section: {casa}}) => (
          <View style={styles.headerWrapper}>
            <Text style={styles.header}>{casa}</Text>
          </View>
        )}
        renderSectionFooter={({section: {data}}) => (
          <View style={styles.headerWrapper}>
            <Text
              style={{
                ...styles.header,
                textTransform: 'capitalize',
              }}>{`Total: ${data.length}`}</Text>
          </View>
        )}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#ffbc0a',
    padding: 20,
    borderRadius: 5,
  },
  headerWrapper: {
    backgroundColor: 'white',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
  },
});
