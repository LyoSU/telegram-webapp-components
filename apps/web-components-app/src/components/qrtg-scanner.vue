<template>
  <div id="app" style="text-align: center; padding: 20px; padding-top: 40%; color: var(--tg-theme-text-color); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-size: 16px; line-height: 1.5;">
    <div style="margin-bottom: 20px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 500;">Сканер QR-коду</h1>
    </div>
    <div style="margin-bottom: 20px;">
      <p>Натисніть кнопку нижче, щоб відкрити</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    function setThemeClass() {
      document.documentElement.className = Telegram.WebApp.colorScheme;
    }
    Telegram.WebApp.onEvent('themeChanged', setThemeClass);
    setThemeClass();

    Telegram.WebApp.showScanQrPopup({});

    Telegram.WebApp.MainButton.isVisible = true;
    Telegram.WebApp.MainButton.text = 'Відкрити сканер QR-коду';

    Telegram.WebApp.onEvent('qrTextReceived', function({data}) {
      if (!data.includes('?start=')) {
        return Telegram.WebApp.showAlert({
          text: 'Невірний QR-код',
        });
      }

      Telegram.WebApp.sendData(
        JSON.stringify({
          type: "qr",
          value: data
        })
      );

      Telegram.WebApp.closeScanQrPopup();

      return true;
    });

    Telegram.WebApp.MainButton.onClick(function() {
      Telegram.WebApp.showScanQrPopup({});
    });
  }
}
</script>
