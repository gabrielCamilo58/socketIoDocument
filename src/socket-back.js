import io from "./servidor.js";
io.on('connection', (socket) => {
    console.log('Um cliente se conectou');

    socket.on('selecionar_documento', (nomeDocumento) => {
        socket.join(nomeDocumento);
    });

    socket.on('texto_editor', (texto) => {
       // socket.broadcast.emit('texto_editor_cliente', texto);
       socket.to("JavaScript").emit('texto_editor_cliente', texto);
    });
})
