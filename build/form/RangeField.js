(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './BaseField', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./BaseField'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BaseField, global.react);
    global.RangeField = mod.exports;
  }
})(this, function (exports, _BaseField, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BaseField2 = _interopRequireDefault(_BaseField);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var RangeField = function (_React$Component) {
    _inherits(RangeField, _React$Component);

    function RangeField() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, RangeField);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RangeField.__proto__ || Object.getPrototypeOf(RangeField)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
        return _this.context.formValueScope.setValue(_this.props.name, _this.transformValueInverse(event.target.value));
      }, _this.transformValue = function (value) {
        return value * _this.props.multiplier;
      }, _this.transformValueInverse = function (value) {
        return value / _this.props.multiplier;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RangeField, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var name = _props.name;
        var min = _props.min;
        var max = _props.max;
        var step = _props.step;
        var multiplier = _props.multiplier;

        var other = _objectWithoutProperties(_props, ['name', 'min', 'max', 'step', 'multiplier']);

        // eslint-disable-line no-unused-vars
        return _react2.default.createElement('input', _extends({}, other, {
          name: this.context.formValueScope.name + '.' + name,
          type: 'range',
          min: min,
          max: max,
          step: step,
          value: this.transformValue(this.context.formValueScope.getValue(name)),
          onChange: this.onChange,
          onInput: this.onChange }));
      }
    }]);

    return RangeField;
  }(_react2.default.Component);

  RangeField.contextTypes = _extends({}, _BaseField2.default.contextTypes);
  RangeField.propTypes = _extends({}, _BaseField2.default.propTypes, {
    min: _react.PropTypes.number.isRequired,
    max: _react.PropTypes.number.isRequired,
    step: _react.PropTypes.number,
    multiplier: _react.PropTypes.number
  });
  RangeField.defaultProps = _extends({}, _BaseField2.default.defaultProps, {
    step: 1,
    multiplier: 1
  });
  exports.default = RangeField;
});