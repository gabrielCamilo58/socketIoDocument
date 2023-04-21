import io from "./servidor.js";
const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript"
    },
    {
        nome: "Node",
        texto: "texto de node"
    },
    {
        nome: "Socket.io",
        texto: "texto de socket.io"
    }
]
io.on('connection', (socket) => {
    console.log('Um cliente se conectou');

    socket.on('selecionar_documento', (nomeDocumento, devpçverTexto) => {
        socket.join(nomeDocumento);
        const documento = encontrarDocumento(nomeDocumento);
        if (documento){
          //  socket.emit("texto_documento", documento.texto);
          devpçverTexto(documento.texto);
        }
    });

    socket.on('texto_editor', ({texto, nomeDocumento}) => {
        const documento = encontrarDocumento(nomeDocumento);
        if (documento) {
            documento.texto = texto;
            socket.to(nomeDocumento).emit('texto_editor_cliente', texto);
        }
    });
})
function encontrarDocumento(nome){
    const documento = documentos.find((documento) => {
        return documento.nome === nome
    });
    return documento;
}
