import React, { Component } from "react";
 import { 
  Container,
  Header,
  HeaderContent, 
  LogoContent, 
  Content,
  ButtonSignup,
  ContentUpload
 } from './styles';
  import {uniqueId} from 'lodash'
  import filesize from 'filesize'

  import api from '../../services/api'

 import Upload from '../../components/Upload'
 import FileList from '../../components/FileList'

 class Home extends Component {
  state = {
    uploadedFiles: []
  };

  async componentDidMount() {
    const response = await api.get("posts");

    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api.post("/posts", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  handleDelete = async id => {
    await api.delete(`/posts/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const { uploadedFiles } = this.state;

    return (
      <Container>
      <Header>
        <HeaderContent>
          <LogoContent>
            <a href="/">
              <svg width="192" height="37" viewBox="0 0 192 37" fill="none"><g><path d="M40.0042 10.8054C38.3888 10.8054 37.0568 12.1091 37.0568 13.7528V19.9879V26.2228H40.0042V19.9879V13.7528H43.5185H47.0328V10.8054H43.5185H40.0042Z" fill="#E1E1E6"></path><path d="M64.604 18.4859V13.7246C64.604 12.1092 63.3003 10.7771 61.6565 10.7771H56.8953H52.134C50.5185 10.7771 49.1865 12.0808 49.1865 13.7246V18.4859V23.2471C49.1865 24.8626 50.4902 26.1946 52.134 26.1946H56.8953H61.6565C63.272 26.1946 64.604 24.8909 64.604 23.2471V18.4859ZM61.6565 18.4859V23.2471H56.8953H52.134V18.4859V13.7246H56.8953H61.6565V18.4859Z" fill="#E1E1E6"></path><path d="M70.4993 10.8054C68.8839 10.8054 67.5519 12.1091 67.5519 13.7528V18.5141V23.2754C67.5519 24.8908 68.8556 26.2228 70.4993 26.2228L80.8721 26.0811V23.2754H70.4993V18.5141V13.7528H80.8721V10.9471L70.4993 10.8054Z" fill="#E1E1E6"></path><path d="M97.7655 10.8054H93.7695L87.9312 17.0121H86.7692V10.8054H83.8218V18.4858V26.1945H86.7692V19.9595H88.243H88.4697L94.5347 26.1945H98.5874L90.7937 18.1457L97.7655 10.8054Z" fill="#E1E1E6"></path><path d="M102.156 23.2471V19.9596L114.626 19.8179V17.0121V13.7246C114.626 12.1092 113.322 10.7771 111.679 10.7771H106.917H102.156C100.541 10.7771 99.2085 12.0808 99.2085 13.7246V18.4859V23.2471C99.2085 24.8626 100.512 26.1946 102.156 26.1946L114.626 26.0529V23.2471H102.156ZM102.156 13.7246H106.917H111.679V17.0121H108.391H102.156V13.7246Z" fill="#E1E1E6"></path><path d="M122.023 6.29926H120.889L119.075 8.5382V10.7771H116.836V13.7246L119.075 13.6962V23.2471C119.075 24.8626 120.379 26.1946 122.023 26.1946L126.784 26.0529V23.2471H122.023V13.6679L127.209 13.5829V10.7771H122.023V6.29926Z" fill="#E1E1E6"></path><path d="M142.74 19.9596C142.74 18.3442 141.436 17.0121 139.793 17.0121H136.08H132.367V13.7246H142.74V10.9188L132.367 10.7771C130.752 10.7771 129.42 12.0808 129.42 13.7246V17.0121C129.42 18.6276 130.723 19.9596 132.367 19.9596H136.08H139.793V23.2471H129.42V26.0529L139.793 26.1946C141.408 26.1946 142.74 24.8909 142.74 23.2471V19.9596Z" fill="#E1E1E6"></path><path d="M158.129 10.8054H153.368H148.606C146.991 10.8054 145.659 12.1091 145.659 13.7528V18.5141V23.2754C145.659 24.8908 146.963 26.2228 148.606 26.2228L161.076 26.0811V23.2754H148.606V19.9879L161.076 19.8461V17.0404V13.7528C161.076 12.1091 159.773 10.8054 158.129 10.8054ZM158.129 17.0121H148.606V13.7245H153.368H158.129V17.0121Z" fill="#E1E1E6"></path><path d="M176.493 10.8054L164.023 10.9471V13.7528H176.493V17.0404L164.023 17.1821V19.9879V23.2754C164.023 24.8908 165.327 26.2228 166.971 26.2228H171.732H176.493C178.109 26.2228 179.441 24.9192 179.441 23.2754V18.5141V13.7528C179.413 12.1091 178.109 10.8054 176.493 10.8054ZM176.493 23.2471H171.732H166.971V19.9595H176.493V23.2471Z" fill="#E1E1E6"></path><path d="M186.814 13.6679L192 13.5829V10.7772H186.814V6.27097H185.68L183.866 8.5099V10.7488H181.627V13.6963L183.866 13.6679V23.2188C183.866 24.8343 185.17 26.1663 186.814 26.1663L191.575 26.0246V23.2188H186.814V13.6679Z" fill="#E1E1E6"></path></g><g><path d="M29.2636 0.716062L24.4739 0.00753861C24.3322 -0.0208023 24.1905 0.0358761 24.1339 0.092558L22.0933 2.7566C21.9516 2.92665 21.9233 3.15338 21.9799 3.35177C22.0366 3.55015 21.8666 3.7202 21.6682 3.69186L19.9961 3.32342C19.741 3.26674 19.4576 3.35177 19.2876 3.5785L12.6558 12.0808C12.5424 12.2508 12.3157 12.3075 12.1173 12.2225L9.59495 11.0888C9.36822 10.9755 9.11316 11.0038 8.91477 11.1455L7.63943 12.0241C7.44104 12.1658 7.15763 12.1941 6.9309 12.0808L6.3074 11.769C5.91063 11.5706 5.42884 11.7974 5.31547 12.2225L4.86201 14.2347C4.74865 14.7165 4.94704 15.1983 5.37215 15.4534L6.33574 16.0485L9.42491 17.9474L10.927 18.8826C11.3521 19.1377 11.8906 19.081 12.259 18.7692L14.7813 16.5586C14.9797 16.3886 15.2915 16.3319 15.5182 16.4736L16.2834 16.8704C16.5385 17.0121 16.8502 16.9554 17.0486 16.757L18.324 15.5667C18.5224 15.3683 18.8341 15.34 19.0608 15.4534L20.9597 16.3319C21.2431 16.4736 21.5832 16.3886 21.7816 16.1335L22.6601 14.9999L29.3202 6.46927C29.632 6.0725 29.4336 5.47734 28.9235 5.36398L27.4498 5.02388C27.138 4.9672 26.9963 4.57043 27.223 4.3437L29.5186 1.48126C29.7454 1.14117 29.6037 0.772744 29.2636 0.716062Z" fill="#8257E6"></path><path d="M7.29885 17.8907C7.15715 17.8056 7.01544 17.9473 7.07212 18.089L7.78065 19.9595C7.83733 20.1012 7.83733 20.243 7.80899 20.3847L7.18549 22.822C7.15714 22.992 7.21383 23.1621 7.32719 23.2471L9.11267 24.6358C9.28272 24.7492 9.50944 24.7492 9.65115 24.6075L11.5216 22.9637C11.635 22.8787 11.7767 22.822 11.8901 22.7936L14.0157 22.5669C14.1574 22.5386 14.214 22.3402 14.0723 22.2552L7.29885 17.8907Z" fill="#8257E6"></path><path d="M6.67557 24.1824C6.56221 24.0974 6.39216 24.0691 6.25046 24.1257L4.74839 24.8626C4.66337 24.8909 4.60668 24.976 4.55 25.061L1.34748 32.9681C1.34748 32.9965 1.34748 32.9964 1.34748 33.0248C1.37582 33.0531 1.40416 33.0815 1.46084 33.0815L2.1977 32.7981C2.22605 32.7981 2.25438 32.7981 2.28272 32.7981C2.31106 32.8264 2.33941 32.8831 2.31107 32.9114L0.015448 36.6808C-0.0412339 36.7658 0.0721325 36.8508 0.128814 36.7658L8.43271 28.4336C8.51773 28.3485 8.54608 28.2635 8.57442 28.1502L8.74446 25.9962C8.74446 25.8545 8.68778 25.7412 8.60276 25.6561L6.67557 24.1824Z" fill="#8257E6"></path></g></svg>
            </a>
          </LogoContent>
        </HeaderContent>
          
          <Content>
          <ButtonSignup href="/login">Logout</ButtonSignup>

          </Content>
      </Header>
      <ContentUpload>
        <Upload onUpload={this.handleUpload}/>
        <span>Lista de Arquivos Enviados</span>
        <FileList files={uploadedFiles}/>
      </ContentUpload>
      
    </Container>
    );
  }
}
export default Home;