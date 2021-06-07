import React from 'react';
import { Toast } from 'tuya-panel-kit';

import { BlockView, Svg } from '@components';

export default () => {
  const [successShow, setSuccessShow] = React.useState(false);
  const [warningShow, setWarningShow] = React.useState(false);
  const [errorShow, setErrorShow] = React.useState(false);
  const [loadingShow, setLoadingShow] = React.useState(false);
  const [show, setShow] = React.useState(false);
  return (
    <>
      <BlockView
        list={[
          {
            title: '带icon样式',
            list: [
              {
                name: '成功提示',
                onPress: () => setSuccessShow(true),
                component: <>{Svg.right}</>,
              },
              {
                name: '警示提示',
                onPress: () => setWarningShow(true),
                component: <>{Svg.right}</>,
              },
              {
                name: '错误提示',
                onPress: () => setErrorShow(true),
                component: <>{Svg.right}</>,
              },
              {
                name: '加载提示',
                onPress: () => setLoadingShow(true),
                component: <>{Svg.right}</>,
              },
            ],
          },
          {
            title: '不带icon样式',
            list: [
              {
                name: '轻提示',
                onPress: () => setShow(true),
                component: <>{Svg.right}</>,
              },
            ],
          },
        ]}
      />
      <Toast.Success show={successShow} text="成功文案" onFinish={() => setSuccessShow(false)} />
      <Toast.Warning show={warningShow} text="警示文案" onFinish={() => setWarningShow(false)} />
      <Toast.Error show={errorShow} text="错误文案" onFinish={() => setErrorShow(false)} />
      <Toast.Loading show={loadingShow} onFinish={() => setLoadingShow(false)} />
      <Toast show={show} text="I'm toastView!!!" onFinish={() => setShow(false)} />
    </>
  );
};
