import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome){
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
}

function emitrTextoEditor(data){
    socket.emit('texto_editor', data);
}


socket.on('texto_editor_cliente', (texto) => {
    atualizaTextoEditor(texto);
})

export {emitrTextoEditor, selecionarDocumento}