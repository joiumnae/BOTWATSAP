const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot WA aktif dan online 24 jam');
});

app.listen(3000, () => {
  console.log('Server anti-sleep aktif dijalankan> Please Follow Dev Yt Gxyenn');
})
