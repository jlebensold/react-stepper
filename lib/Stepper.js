'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stepper = function (_Component) {
  _inherits(Stepper, _Component);

  function Stepper() {
    _classCallCheck(this, Stepper);

    var _this = _possibleConstructorReturn(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).call(this));

    _this.getStyles = _this.getStyles.bind(_this);
    _this.renderStep = _this.renderStep.bind(_this);
    return _this;
  }

  _createClass(Stepper, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        root: {
          width: '100%',
          minHeight: 0,
          padding: 0
        },
        stepper: {
          display: 'table',
          width: '100%',
          margin: '0 auto'
        }
      };
    }
  }, {
    key: 'renderStep',
    value: function renderStep(index) {
      var _props = this.props,
          activeStep = _props.activeStep,
          steps = _props.steps,
          activeColor = _props.activeColor,
          completeColor = _props.completeColor,
          defaultColor = _props.defaultColor,
          circleFontColor = _props.circleFontColor,
          activeTitleColor = _props.activeTitleColor,
          completeTitleColor = _props.completeTitleColor,
          defaultTitleColor = _props.defaultTitleColor,
          size = _props.size,
          circleFontSize = _props.circleFontSize,
          titleFontSize = _props.titleFontSize,
          circleTop = _props.circleTop,
          titleTop = _props.titleTop;

      var step = steps[index];

      return _react2.default.createElement(_Step2.default, {
        width: 100 / steps.length,
        title: step,
        key: 's_' + index,
        active: index === activeStep,
        completed: index < activeStep,
        first: index === 0,
        last: index === steps.length - 1,
        index: index,
        activeColor: activeColor, completeColor: completeColor, defaultColor: defaultColor, circleFontColor: circleFontColor,
        activeTitleColor: activeTitleColor, completeTitleColor: completeTitleColor, defaultTitleColor: defaultTitleColor,
        size: size, circleFontSize: circleFontSize, titleFontSize: titleFontSize,
        circleTop: circleTop, titleTop: titleTop
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var steps = this.props.steps;

      var styles = this.getStyles();

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(
          'div',
          { style: styles.stepper },
          steps.map(function (s, i) {
            return _this2.renderStep(i);
          })
        )
      );
    }
  }]);

  return Stepper;
}(_react.Component);

exports.default = Stepper;


Stepper.defaultProps = {
  activeStep: 0
};

Stepper.propTypes = {
  activeStep: _react.PropTypes.number,
  steps: _react.PropTypes.array,
  activeColor: _react.PropTypes.string,
  completeColor: _react.PropTypes.string,
  defaultColor: _react.PropTypes.string,
  activeTitleColor: _react.PropTypes.string,
  completeTitleColor: _react.PropTypes.string,
  defaultTitleColor: _react.PropTypes.string,
  circleFontColor: _react.PropTypes.string,
  size: _react.PropTypes.number,
  circleFontSize: _react.PropTypes.number,
  titleFontSize: _react.PropTypes.number,
  circleTop: _react.PropTypes.number,
  titleTop: _react.PropTypes.number
};