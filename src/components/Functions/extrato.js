import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function geraExtrato(Vaga, DataE, HoraE, DataS, HoraS, Valor) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const Valor1 = 10;
    //const Valor = ValorPagar.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    Valor = Valor1.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    DataE = '10/01/2023';
    HoraE = '14:50:50';
    DataS = '10/01/2023';
    HoraS = '15:10:20';
    const Perm = 10 - 5;

    //alert(Valor);
    const cabec = [
        {
            text: 'E-FLANELINHA',
            margin: [40, 25, 0, 45], //left, top, right, bottom
            style: 'cabec'
        }
    ];

    const campos = [
        [{ text: 'CNPJ: 00.000.000/0000-00', style: 'campos'            }],
        [{ text: '_______________________________'                      }],
        [{ text: 'FONE: (44) 0000-0000', style: 'campos'                }],
        [{ text: '_______________________________'                      }],
        [{ text: 'RECIBO DE ESTACIONAMENTO', style: 'campos'            }],
        [{ text: 'TICKET: 000001', style: 'campos'                      }],
        [{ text: 'BLOCO: A VAGA: 66', style: 'campos'                   }],
        [{ text: 'ENTRADA: ' + DataE + ' AS ' + HoraE, style: 'campos'  }],
        [{ text: 'SAIDA: ' + DataS + ' AS ' + HoraS, style: 'campos'    }],
        [{ text: 'PERMANENCIA: ' + Perm, style: 'campos'                }],
        [{ text: 'TIPO DE PAGAMENTO: PIX', style: 'campos'              }],
        [{ text: '_______________________________'                      }],
        [{ text: 'VALOR TOTAL: ', style: 'cabec'                        }],
        [{ text: Valor, style: 'cabec'                                  }],
    ];

    const rodape = [

        [{ text: '_______________________________' }],
        [{ text: 'AGRADECEMOS A PREFERÊNCIA!', style: 'rodape' }]
    ];

    const docDefinition = {
        pageSize: 'A7',
        pageMargins: [15, 50, 15, 40],
        header: [cabec],
        content: [campos],
        footer: [rodape],
        styles: {
            cabec: {
                fontSize: 20,
                bold: true,
                aligment: 'center',
            },
            campos: {
                fontSize: 10,
                aligment: 'center',
            },
            rodape: {
                fontSize: 8,
                aligment: 'center',
                margin: [20, 0, 0, 0]
            }
        }
    }

    pdfMake.createPdf(docDefinition).print();
}


export default geraExtrato;