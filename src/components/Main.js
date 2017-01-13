require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require('../datas/ImagesData.json');

imageDatas.forEach(function (data) {
    data.imageURL = require('../images/' + data.fileName);
});

class ImgFigure extends React.Component {
    render(){
        return (
            <figure className="img-figure">
                <img src={this.props.data.imageURL} alt={this.props.data.title}/>
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                </figcaption>
            </figure>
        );
    }
}

class AppComponent extends React.Component {

    Constants = {
        centerPos: {
            left: 0,
            right: 0
        },
        hPosRange: {
            leftSectionX: [0, 0],
            rightSectionX: [0, 0],
            y: [0, 0]
        },
        vPosRange: {
            x: [0, 0],
            topY: [0, 0]
        }
    }

    rearrange(centerIndex) {
        var imgArrangeArr = this.state.imgArrangeArr,
            Constant = this.Constants,
            centerPos = Constant.centerPos,
            hPosRange = Constant.hPosRange,
            vPosRange = Constant.vPosRange,
            hPosRangeLeftSectionX = hPosRange.leftSectionX,
            hPosRangeRightSectionY = hPosRange.rightSectionX,
            hPosRangeY = hPosRange.y,
            vPosRangeTopY = vPosRange.topY,
            vPosRangeX = vPosRange.x,

            imgRangeTopArr = [],

            topNum = Math.ceil(Math.random() * 2);




    }

    getInitialStage() {
        return {
            imgArrangeArr: [
                {
                    pos: {
                        left: '0',
                        top: '0'
                    }
                }
            ]
        }
    }

    componentDidMount() {
        var StageDOM = React.findDOMNode(this.refs.stage),
            StageWidth = StageDOM.scrollWidth,
            StageHeight = StageDOM.scrollHeight,
            halfStageWidth = Math.ceil(StageWidth / 2),
            halfStageHeight = Math.ceil(StageHeight / 2);

        var ImgDOM = React.findDOMNode(this.refs.ImgFigure_0),
            ImgWidth = ImgDOM.scrollWidth,
            ImgHeight = ImgDOM.scrollHeight,
            halfImgWidth = Math.ceil(ImgWidth / 2),
            halfImgHeight = Math.ceil(ImgHeight / 2);

        this.Constants.centerPos = {
            left: halfStageWidth - halfImgWidth,
            right: halfStageHeight - halfImgHeight
        }

        this.Constants.hPosRange.leftSectionX[0] = -halfImgWidth
        this.Constants.hPosRange.leftSectionX[1] = halfStageWidth - halfImgWidth * 3;
        this.Constants.hPosRange.rightSectionX[0] = halfStageWidth + halfImgWidth;
        this.Constants.hPosRange.rightSectionX[1] = StageWidth - halfImgWidth;
        this.Constants.hPosRange.y[0] = -halfImgHeight;
        this.Constants.hPosRange.y[1] = StageHeight - halfImgHeight;

        this.Constants.vPosRange.topY[0] = -halfImgHeight;
        this.Constants.vPosRange.topY[1] = halfStageHeight - halfImgHeight * 3;
        this.Constants.vPosRange.x[0] = halfImgWidth - ImgWidth;
        this.Constants.vPosRange.x[1] = halfImgWidth;

        this.rearrange(0);
    }

    render() {

        var controlUnits = [];
        var imgFigure = [];

        imageDatas.forEach(function (value, index) {
            if(!this.state.imgArrangeArr[index]){
                this.state.imgArrangeArr[index] = {
                    pos: {
                        left: 0,
                        top: 0
                    }
                }
            }
            imgFigure.push(<ImgFigure data={value} ref={"ImgFigure_" + index}></ImgFigure>);
        }.bind(this));

        return (
              <section className="stage" ref="stage">
                  <section className="img-src">
                      {imgFigure}
                  </section>
                  <nav className="controller-nav">
                      {controlUnits}
                  </nav>
              </section>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
