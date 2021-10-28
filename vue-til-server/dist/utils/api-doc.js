import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './api-spec.json';
import { Router } from 'express';
const router = Router();
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/api/v1', router);
export default router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9hcGktZG9jLmpzIl0sIm5hbWVzIjpbInN3YWdnZXJVaSIsInN3YWdnZXJEb2N1bWVudCIsIlJvdXRlciIsInJvdXRlciIsInVzZSIsInNlcnZlIiwic2V0dXAiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0Isb0JBQXRCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixpQkFBNUI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLFNBQXZCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxNQUFNLEVBQXJCO0FBRUFDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsRUFBb0JKLFNBQVMsQ0FBQ0ssS0FBOUIsRUFBcUNMLFNBQVMsQ0FBQ00sS0FBVixDQUFnQkwsZUFBaEIsQ0FBckM7QUFDQUUsTUFBTSxDQUFDQyxHQUFQLENBQVcsU0FBWCxFQUFzQkQsTUFBdEI7QUFFQSxlQUFlQSxNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN3YWdnZXJVaSBmcm9tICdzd2FnZ2VyLXVpLWV4cHJlc3MnO1xyXG5pbXBvcnQgc3dhZ2dlckRvY3VtZW50IGZyb20gJy4vYXBpLXNwZWMuanNvbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci51c2UoJy9kb2NzJywgc3dhZ2dlclVpLnNlcnZlLCBzd2FnZ2VyVWkuc2V0dXAoc3dhZ2dlckRvY3VtZW50KSk7XHJcbnJvdXRlci51c2UoJy9hcGkvdjEnLCByb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iXX0=