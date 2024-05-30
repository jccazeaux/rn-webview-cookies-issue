import {Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import {WebView} from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 24,
    textAlign: 'center',
  },
});

export const App = () => {
  const testCookies = () => {
    fetch('https://en.m.wikipedia.org/wiki/Special:Notifications').then(
      function (response) {
        // handle success
        if (
          response.url ===
          'https://en.m.wikipedia.org/wiki/Special:Notifications'
        ) {
          alert(`URL is ${response.url} \n => Connexion successful`);
        } else {
          alert(`URL is ${response.url} \n => Connexion failed`);
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Connect to wikipedia UNCHECK 'KEEP ME LOGGED IN' to have session cookies
      </Text>
      <WebView
        originWhitelist={['*']}
        sharedCookiesEnabled={true}
        source={{uri: 'https://en.m.wikipedia.org/wiki/Special:Notifications'}}
      />
      <Button onPress={testCookies} title="Test cookies"></Button>
    </SafeAreaView>
  );
};
