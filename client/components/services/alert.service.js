export default function AlertService($mdDialog) {
  'ngInject'

  const Alert = {
    alert(title = 'Error', textContent= '') {
      let alert = $mdDialog.alert({
        title,
        textContent,
        ok: '확인',
        hasBackdrop: true
      });

      $mdDialog.show(alert)
        .finally(() => {
          alert = undefined
        })
    },
  }

  return Alert
}
