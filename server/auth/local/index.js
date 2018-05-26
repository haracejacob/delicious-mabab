import 'express-async-errors'
import { Router } from 'express'
import passport from 'passport'
import { signToken } from '../auth.service'

const router = Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    const error = err || info;
    if (error) {
      return res.status(401).json(error);
    }
    if (!user) {
      return res.status(404).json({message: '비밀번호 또는 아이디가 틀렸습니다. 다시 입력 해주십시오'});
    }

    const token = signToken(user.id, user.role);
    res.json({ token });
  })(req, res, next);
});

export default router;
