import React, { Component } from 'react';
import { Container, Content, DropContainer, UploadMessage } from './styles';

import Dropzone from 'react-dropzone'

export default class Upload extends Component {

  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste ou clique aqui para adicionar seus arquivos</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>

  };


  render() {
    const { onUpload } = this.props;

    return (
      <Container>
        <Content>
          <Dropzone accept="image/*" onDropAccepted={onUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                {this.renderDragMessage(isDragActive, isDragReject)}
              </DropContainer>
            )}
          </Dropzone>
        </Content>
      </Container>
    );
  }
}
