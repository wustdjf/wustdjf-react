require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require('../datas/ImagesData.json');

imageDatas.forEach(function (data) {
    data.imageURL = require('../images/' + data.fileName);
});

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="img-src"></section>
          <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
