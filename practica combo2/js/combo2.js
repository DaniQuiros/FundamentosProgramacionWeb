document.querySelector('#btnCalcular').addEventListener('click', determinarMontoFinal);


function determinarMontoFinal(){
    let stipogamer = '';
    let nCostoDia = 0;
    let nPorcAdicional = 0;
    let nCodigo = 0;
    let nCargoAdicional = 0;
    let nMontoFinal = 0;
    let nCantDias = 0;
    let nSubtotal = 0;

    nCodigo = Number(document.querySelector('#txtCodigo').value);
    stipogamer = document.querySelector('#slttipogamer').value;
    nCantDias = Number(document.querySelector('#txtCantDias').value);

    if (nCodigo >= 20 && nCodigo <= 24){
        nPorcAdicional = 0.1;
    }

    switch(stipogamer){
        case 'g1':
            nCostoDia = 200000;
            break;
        case 'g2':
            nCostoDia = 250000;
            break;
        case 'g3':
            nCostoDia = 300000;
            break;
        case 'g4':
            nCostoDia = 350000;
            break;
        case 'g5':
            nCostoDia = 4000000;
            break;
        default:
            nCostoDia = 0;
            break;
    }

    nSubtotal = nCostoDia * nCantDias;
    nCargoAdicional = nSubtotal * nPorcAdicional;
    nMontoFinal = nSubtotal + nCargoAdicional;
    document.querySelector('#txtResultadoMontoFinal').value = nMontoFinal;
}

function btnlimpiar(){
    document.getElementById('textCodigo').value = "";
    document.getElementById('textCantDias').value = "";
    document.getElementById('slttipogamer').value = "";
    document.getElementById('txtResultadoMontoFinal').value = "";

}