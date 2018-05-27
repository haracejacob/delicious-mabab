export default function AlertService($mdDialog) {
  'ngInject'

  const Alert = {
    alert(title = 'Error', textContent = '') {
      const alert = $mdDialog.alert({
        title,
        textContent,
        ok: '확인',
        hasBackdrop: true
      })

      $mdDialog.show(alert)
    },

    confirm($event, title, textContent = '') {
      return new Promise(resolve => {
        const confirm = $mdDialog.confirm()
          .title(title)
          .textContent(textContent)
          .targetEvent($event)
          .ok('예')
          .cancel('아니요');

        $mdDialog.show(confirm).then(() => resolve(true), () => resolve(false))
      })

    }
  }

  return Alert
}
