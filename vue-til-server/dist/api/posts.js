"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _PostModel = _interopRequireDefault(require("../models/PostModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// router init
const router = (0, _express.Router)();
router.post('/', async (req, res) => {
  try {
    const doc = await _PostModel.default.create(_objectSpread(_objectSpread({}, req.body), {}, {
      createdBy: req.user._id
    }));
    res.status(201).json({
      data: doc
    });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res.status(400).send({
        message: 'Duplicated Data',
        error
      });
    }

    res.status(400).send({
      message: 'sth wrong',
      error
    });
  }
});
router.get('/', async (req, res) => {
  try {
    const docs = await _PostModel.default.find({
      createdBy: req.user._id
    }).lean().exec();
    res.status(200).json({
      posts: docs
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const doc = await _PostModel.default.findOne({
      createdBy: req.user._id,
      _id: req.params.id
    }).lean().exec();

    if (!doc) {
      return res.status(400).json({
        message: 'The data is not found'
      });
    }

    res.status(200).json(_objectSpread({}, doc));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const updatedDoc = await _PostModel.default.findOneAndUpdate({
      createdBy: req.user._id,
      _id: req.params.id
    }, req.body, {
      new: true
    }).lean().exec();

    if (!updatedDoc) {
      return res.status(400).json({
        message: 'cannot update the data'
      });
    }

    res.status(200).json(_objectSpread({}, updatedDoc));
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const removed = await _PostModel.default.findOneAndRemove({
      createdBy: req.user._id,
      _id: req.params.id
    }).lean().exec();

    if (!removed) {
      return res.status(400).json({
        message: 'cannot remove the data'
      });
    }

    return res.status(200).json(_objectSpread({}, removed));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'sth wrong',
      error
    });
  }
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvcG9zdHMuanMiXSwibmFtZXMiOlsicm91dGVyIiwicG9zdCIsInJlcSIsInJlcyIsImRvYyIsIlBvc3RNb2RlbCIsImNyZWF0ZSIsImJvZHkiLCJjcmVhdGVkQnkiLCJ1c2VyIiwiX2lkIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwic2VuZCIsIm1lc3NhZ2UiLCJnZXQiLCJkb2NzIiwiZmluZCIsImxlYW4iLCJleGVjIiwicG9zdHMiLCJmaW5kT25lIiwicGFyYW1zIiwiaWQiLCJwdXQiLCJ1cGRhdGVkRG9jIiwiZmluZE9uZUFuZFVwZGF0ZSIsIm5ldyIsImRlbGV0ZSIsInJlbW92ZWQiLCJmaW5kT25lQW5kUmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFFQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxzQkFBZjtBQUVBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLEVBQWlCLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNuQyxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLG1CQUFVQyxNQUFWLGlDQUNiSixHQUFHLENBQUNLLElBRFM7QUFFaEJDLE1BQUFBLFNBQVMsRUFBRU4sR0FBRyxDQUFDTyxJQUFKLENBQVNDO0FBRkosT0FBbEI7QUFJQVAsSUFBQUEsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsSUFBSSxFQUFFVDtBQUFSLEtBQXJCO0FBQ0QsR0FORCxDQU1FLE9BQU9VLEtBQVAsRUFBYztBQUNkQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7QUFDQSxRQUFJQSxLQUFLLENBQUNHLElBQU4sS0FBZSxLQUFuQixFQUEwQjtBQUN4QixhQUFPZCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQjtBQUFF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d0JMLE1BQUFBO0FBQXhCLEtBQXJCO0FBQ0Q7QUFDRixDQWxCRDtlQW9CZWQsTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYnNcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbi8vIG1vZHVsZXNcclxuaW1wb3J0IFBvc3RNb2RlbCBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsLmpzJztcclxuXHJcbi8vIHJvdXRlciBpbml0XHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jID0gYXdhaXQgUG9zdE1vZGVsLmNyZWF0ZSh7XHJcbiAgICAgIC4uLnJlcS5ib2R5LFxyXG4gICAgICBjcmVhdGVkQnk6IHJlcS51c2VyLl9pZCxcclxuICAgIH0pO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBkYXRhOiBkb2MgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIGlmIChlcnJvci5jb2RlID09PSAxMTAwMCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiAnRHVwbGljYXRlZCBEYXRhJywgZXJyb3IgfSk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6ICdzdGggd3JvbmcnLCBlcnJvciB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgUG9zdE1vZGVsLmZpbmQoe1xyXG4gICAgICBjcmVhdGVkQnk6IHJlcS51c2VyLl9pZCxcclxuICAgIH0pXHJcbiAgICAgIC5sZWFuKClcclxuICAgICAgLmV4ZWMoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHBvc3RzOiBkb2NzLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZG9jID0gYXdhaXQgUG9zdE1vZGVsLmZpbmRPbmUoe1xyXG4gICAgICBjcmVhdGVkQnk6IHJlcS51c2VyLl9pZCxcclxuICAgICAgX2lkOiByZXEucGFyYW1zLmlkLFxyXG4gICAgfSlcclxuICAgICAgLmxlYW4oKVxyXG4gICAgICAuZXhlYygpO1xyXG5cclxuICAgIGlmICghZG9jKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdUaGUgZGF0YSBpcyBub3QgZm91bmQnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4uZG9jIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ3N0aCB3cm9uZycsIGVycm9yIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5yb3V0ZXIucHV0KCcvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVwZGF0ZWREb2MgPSBhd2FpdCBQb3N0TW9kZWwuZmluZE9uZUFuZFVwZGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGNyZWF0ZWRCeTogcmVxLnVzZXIuX2lkLFxyXG4gICAgICAgIF9pZDogcmVxLnBhcmFtcy5pZCxcclxuICAgICAgfSxcclxuICAgICAgcmVxLmJvZHksXHJcbiAgICAgIHsgbmV3OiB0cnVlIH0sXHJcbiAgICApXHJcbiAgICAgIC5sZWFuKClcclxuICAgICAgLmV4ZWMoKTtcclxuXHJcbiAgICBpZiAoIXVwZGF0ZWREb2MpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ2Nhbm5vdCB1cGRhdGUgdGhlIGRhdGEnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4udXBkYXRlZERvYyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdzdGggd3JvbmcnLCBlcnJvciB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxucm91dGVyLmRlbGV0ZSgnLzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZW1vdmVkID0gYXdhaXQgUG9zdE1vZGVsLmZpbmRPbmVBbmRSZW1vdmUoe1xyXG4gICAgICBjcmVhdGVkQnk6IHJlcS51c2VyLl9pZCxcclxuICAgICAgX2lkOiByZXEucGFyYW1zLmlkLFxyXG4gICAgfSlcclxuICAgICAgLmxlYW4oKVxyXG4gICAgICAuZXhlYygpO1xyXG5cclxuICAgIGlmICghcmVtb3ZlZCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnY2Fubm90IHJlbW92ZSB0aGUgZGF0YScgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgLi4ucmVtb3ZlZCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdzdGggd3JvbmcnLCBlcnJvciB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iXX0=