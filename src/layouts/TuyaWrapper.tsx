// @ts-nocheck
import React from 'react';
import { View, StyleSheet, StyleProp, ViewProps, TextProps, Platform } from 'react-native';
import {
  TopBar,
  Notification,
  GlobalToast,
  TYSdk,
  Utils,
  Theme as ThemeProvider,
} from 'tuya-panel-kit';
import MaskView from 'tuya-panel-kit/lib/components/modal/portalOut';

console.log('[TuyaWrapper]', TYSdk);
const TYEvent = TYSdk.event;

const { get } = Utils.CoreUtils;
const { withTheme } = Utils.ThemeUtils;
const { isIphoneX } = Utils.RatioUtils;
const isIos = Platform.OS === 'ios';
const dropHeight = isIos ? (isIphoneX ? 88 : 64) : 56;

interface Props {
  style?: StyleProp<ViewProps>;
  topbarStyle?: StyleProp<ViewProps>;
  topbarTextStyle?: StyleProp<TextProps>;
  hideTopbar?: boolean;
  background?: string | number | object;
  theme?: { [key: string]: any };
  title?: string;
  onBack?: () => void;
  capability?: number;
  showMenu?: boolean;
  /**
   * 蓝牙离线提示是否覆盖整个面板(除头部栏外)
   */
  isBleOfflineOverlay?: boolean;
  renderTopBar?: null | (() => React.ReactNode | null);
}

interface State {
  showNotification: boolean;
  showToast: boolean;
  information: { [key: string]: any };
  motionStyle: StyleProp<ViewProps>;
  successInformation: { [key: string]: any };
  successStyle: StyleProp<ViewProps>;
}

class FullView extends React.Component<Props, State> {
  static defaultProps = {
    theme: null,
    title: '',
    style: null,
    topbarStyle: null,
    hideTopbar: false,
    showMenu: true,
    background: null,
    onBack: null,
    capability: 0,
    isBleOfflineOverlay: true,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      // background: props.background,
      showNotification: false,
      showToast: false,
      information: {},
      motionStyle: {},
      successInformation: {},
      successStyle: {},
    };
  }

  componentDidMount() {
    TYEvent.on('showNotification', this.showNotification);
    TYEvent.on('hideNotification', this.hideNotification);
    TYEvent.on('showToast', this.showToast);
    TYEvent.on('hideToast', this.hideToast);
  }

  componentWillUnmount() {
    TYEvent.off('showNotification', this.showNotification);
    TYEvent.off('hideNotification', this.hideNotification);
    TYEvent.off('showToast', this.showToast);
    TYEvent.off('hideToast', this.hideToast);
  }

  onBack = (tab: string) => {
    if (typeof this.props.onBack === 'function' && tab === 'left') {
      this.props.onBack();
      return;
    }
    if (tab === 'right') {
      TYSdk.native.showDeviceMenu();
    } else {
      TYSdk.mobile.back();
    }
  };

  get topBarMoreIconName() {
    return (
      (TYSdk.devInfo.panelConfig &&
        TYSdk.devInfo.panelConfig.fun &&
        TYSdk.devInfo.panelConfig.fun.topBarMoreIconName) ||
      'pen'
    );
  }

  showNotification = (data: any) => {
    const { motionStyle, ...rest } = data;
    this.setState({ showNotification: true, information: rest, motionStyle });
  };

  showToast = (data: any) => {
    const { style, ...rest } = data;
    this.setState({
      showToast: true,
      successInformation: rest,
      successStyle: style,
    });
  };

  hideNotification = () => {
    this.setState({ showNotification: false });
  };

  hideToast = () => {
    this.setState({ showToast: false });
  };

  // 渲染 Notification
  renderNotification() {
    return (
      <Notification
        onClose={() => this.setState({ showNotification: false })}
        motionConfig={{ dropHeight }}
        {...this.state.information}
        show={this.state.showNotification}
        motionStyle={[{ zIndex: 99 }, this.state.motionStyle]}
      />
    );
  }

  // 渲染全局成功 Toast
  renderGlobalToast() {
    return (
      <GlobalToast
        onFinish={() => this.setState({ showToast: false })}
        {...this.state.successInformation}
        show={this.state.showToast}
        style={[{ zIndex: 999 }, this.state.successStyle]}
      />
    );
  }

  renderTopBar() {
    const { title, topbarStyle, hideTopbar, renderTopBar, topbarTextStyle, showMenu } = this.props;

    if (!hideTopbar) {
      if (renderTopBar) {
        return renderTopBar();
      }
      const uiPhase = TYSdk.devInfo.uiPhase || 'release';
      // @ts-ignore
      const { color } = StyleSheet.flatten(topbarTextStyle) || {
        color: '#000',
      };
      const actions = [
        {
          accessibilityLabel: 'TopBar_Btn_RightItem',
          name: this.topBarMoreIconName,
          onPress: () => this.onBack('right'),
        },
        uiPhase !== 'release' && {
          accessibilityLabel: 'TopBar_Preview',
          style: {
            backgroundColor: '#57DD43',
            borderWidth: 1,
          },
          contentStyle: { fontSize: 12 },
          color: '#000',
          source: 'Preview',
          disabled: true,
        },
      ].filter(v => !!v);
      return (
        <TopBar
          style={[{ zIndex: 999 }, topbarStyle]}
          title={title}
          titleStyle={topbarTextStyle}
          color={color}
          actions={showMenu ? actions : []}
          onBack={() => this.onBack('left')}
        />
      );
    }

    return null;
  }

  render() {
    const { style, theme } = this.props;
    const background = this.props.background || get(theme, 'global.background', '#f8f8f8');
    const isBgColor = typeof background === 'string';
    return (
      <View style={[{ flex: 1 }, isBgColor && { backgroundColor: background }, style]}>
        {this.renderNotification()}
        {this.renderTopBar()}
        {this.renderGlobalToast()}
        {this.props.children}
        <div id="root" style={{}}>
          <MaskView />
        </div>
      </View>
    );
  }
}

const Wrapper = withTheme(FullView);

export default props => (
  <ThemeProvider
    theme={{
      button: {
        fontSize: 16,
      },
    }}
  >
    <Wrapper
      style={{
        overflow: 'hidden',
        scrollbarWidth: 'none' as const,
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      showMenu={false}
      background="transparent"
      topbarStyle={{ marginTop: 20, backgroundColor: 'transparent' }}
      topbarTextStyle={{ color: '#000' }}
      renderTopBar={() => null}
      onBack={() => {}}
    >
      {props.children}
    </Wrapper>
  </ThemeProvider>
);
