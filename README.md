# pass.in 

O pass.in é uma aplicação de participantes em eventos presenciais**,

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### RF

- [X] O organizador deve porder cadastrar um novo evento
- [X] O organizador deve poder visualizar dados de um evento
- [X] O organizador deve poder visualziar a lista de participantes 
- [X] O participante deve poder se inscrever em um evento
- [X] O participante deve poder visualizar seu crachá de inscrição
- [X] O organizador deve porder realizar check-in no evento

### Regras de negócio

- [X] O participante só pode se inscrever em um evento uma única vez
- [X] O participante só pode se inscrever em eventos com vagas disponíveis
- [X] O participante só pode realizar check-in em um evento uma única vez

### Requisitos não-funcionais

- [X] O check-in no evento será realizado através de um QRcode
