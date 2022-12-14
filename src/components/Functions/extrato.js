import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function geraExtrato() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const cabec = [
        {
            text: 'E-FLANELINHA',
            margin: [40, 25, 0, 45], //left, top, right, bottom
            style: 'cabec'
        }
    ];

    const campos = [
        [{ text: 'CNPJ: 00.000.000/0000-00', style: 'campos' }],
        [{ text: '_______________________________'           }],
        [{ text: 'FONE: (00) 0000-0000', style: 'campos'     }],
        [{ text: '_______________________________'           }],
        [{ text: 'RECIBO DE ESTACIONAMENTO', style: 'campos' }],
        [{ text: 'TICKET: 000001', style: 'campos'           }],
        [{ text: 'BLOCO: A VAGA: 66', style: 'campos'        }],
        [{ text: 'ENTRADA: AS ', style: 'campos'             }],
        [{ text: 'SAIDA: AS ', style: 'campos'               }],
        [{ text: 'PERMANENCIA: ', style: 'campos'            }],
        [{ text: 'TIPO DE PAGAMENTO: PIX', style: 'campos'   }],
        [{ text: '_______________________________'           }],
        [{ text: 'VALOR TOTAL: ', style: 'cabec'             }],
        [{ text: 'R$ 25,00', style: 'cabec'                  }],
    ];

    const rodape = [
        
        [{ text: '_______________________________'             }],
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