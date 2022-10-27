import React from 'react';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './qrcode.css';
import Menu from '../../components/Menu/menu';

function GenerateQRCode() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container-qrcode">

      <Menu />

      <div class="container-QR">
        <div>
          <QRCode
            value={link}
          />
        </div>

        <div class="btnArea">
          <input
            className="input"
            placeholder="Digite seu link..."
            value={link}
          />

          <button class="btn" onClick={(e) => handleQrcode(e)}><a>Gerar QRCode</a></button>

          <button class="btn" href={qrcodeLink} download={`qrcode.png`}><a>Baixar QRCode</a></button>
        </div>

      </div>
    </div>
  );
}

export default GenerateQRCode;