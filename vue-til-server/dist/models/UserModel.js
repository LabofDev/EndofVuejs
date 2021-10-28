import mongoose from 'mongoose';
import schemaOptions from './schemaOptions';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 50
  },
  password: {
    type: String,
    required: true
  },
  nickname: String,
  insertedDate: {
    type: Date,
    default: Date.now
  }
}, schemaOptions);
const UserModel = mongoose.model('Users', userSchema);
export default UserModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvVXNlck1vZGVsLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwic2NoZW1hT3B0aW9ucyIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInRyaW0iLCJtYXhsZW5ndGgiLCJwYXNzd29yZCIsIm5pY2tuYW1lIiwiaW5zZXJ0ZWREYXRlIiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJVc2VyTW9kZWwiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsUUFBUCxNQUFxQixVQUFyQjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIsaUJBQTFCO0FBRUEsTUFBTUMsVUFBVSxHQUFHLElBQUlGLFFBQVEsQ0FBQ0csTUFBYixDQUNqQjtBQUNFQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFQyxNQURFO0FBRVJDLElBQUFBLFFBQVEsRUFBRSxJQUZGO0FBR1JDLElBQUFBLE1BQU0sRUFBRSxJQUhBO0FBSVJDLElBQUFBLElBQUksRUFBRSxJQUpFO0FBS1JDLElBQUFBLFNBQVMsRUFBRTtBQUxILEdBRFo7QUFRRUMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JOLElBQUFBLElBQUksRUFBRUMsTUFERTtBQUVSQyxJQUFBQSxRQUFRLEVBQUU7QUFGRixHQVJaO0FBWUVLLEVBQUFBLFFBQVEsRUFBRU4sTUFaWjtBQWFFTyxFQUFBQSxZQUFZLEVBQUU7QUFBRVIsSUFBQUEsSUFBSSxFQUFFUyxJQUFSO0FBQWNDLElBQUFBLE9BQU8sRUFBRUQsSUFBSSxDQUFDRTtBQUE1QjtBQWJoQixDQURpQixFQWdCakJmLGFBaEJpQixDQUFuQjtBQW1CQSxNQUFNZ0IsU0FBUyxHQUFHakIsUUFBUSxDQUFDa0IsS0FBVCxDQUFlLE9BQWYsRUFBd0JoQixVQUF4QixDQUFsQjtBQUVBLGVBQWVlLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgc2NoZW1hT3B0aW9ucyBmcm9tICcuL3NjaGVtYU9wdGlvbnMnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICB0cmltOiB0cnVlLFxyXG4gICAgICBtYXhsZW5ndGg6IDUwLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbmlja25hbWU6IFN0cmluZyxcclxuICAgIGluc2VydGVkRGF0ZTogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9LFxyXG4gIH0sXHJcbiAgc2NoZW1hT3B0aW9ucyxcclxuKTtcclxuXHJcbmNvbnN0IFVzZXJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKCdVc2VycycsIHVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsO1xyXG4iXX0=