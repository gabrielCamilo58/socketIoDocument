import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome){
    socket.emit("selecionar_documento", nome);
}

function emitrTextoEditor(texto){
    socket.emit('texto_editor', texto);
}

socket.on('texto_editor_cliente', (texto) => {
    atualizaTextoEditor(texto);
})

export {emitrTextoEditor, selecionarDocumento}