import React from 'react';
import { StyleSheet, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import { Constants } from 'expo';

export default class Analyses extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PDFReader
          source={{ uri: "http://www.ch-stdenis.fr/media-files/478/livret-biologique-2016-avril-2016.pdf" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
