import createError from 'http-errors'
import path from 'path';

import authRouter from './auth'
import userRouter from './api/user'
// import categoryRouter from './api/category'
import menuRouter from './api/menu'
import reservationRouter from './api/reservation'
import reservationMenuRouter from './api/reservationMenu'

export default app => {
  app.use('/auth', authRouter)
  app.use('/api/user', userRouter)
  // app.use('/api/category', categoryRouter)
  app.use('/api/menu', menuRouter)
  app.use('/api/reservation', reservationRouter)
  app.use('/api/reservationMenu', reservationMenuRouter)

  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}
