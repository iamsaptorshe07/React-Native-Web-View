import React from 'react';
import { WebView } from 'react-native-webview';
import {BackHandler,Platform} from 'react-native';


class WebViewComponent extends React.Component {
  webView = {
    canGoBack: false,
    ref: null,
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    return (
      <WebView
        source={{ uri: "http://www.travmaks.in" }}
        ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
      />
    );
  }
}

export default WebViewComponent
