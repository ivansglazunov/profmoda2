import React from 'react';

export default class TextBackComponent extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    const element = this.ref.current;
    var options = {
      widgetId: '20ffaed7-9315-cd37-6b4b-016c42c15f20',
      element,
      data: { userId: localStorage.getItem('userId') },
    };
    // eslint-disable-next-line no-undef
    if (typeof(TextBack) === 'object') new TextBack.NotificationWidget(options);
  }

  ref = React.createRef();

  render() {
    return <div ref={this.ref} />;
  }
}
