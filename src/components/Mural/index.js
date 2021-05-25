import React, { Component } from 'react';
import { TextArea, ContentButtonSave, ButtonSave, FeedContent, FeedText, TextLabel } from './styles';

class Mural extends Component {
  constructor() {
    super();
    this.state = { post: '', posts: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ post: event.target.value });
  }

  handleSubmit() {
    this.setState({
      post: '',
      posts: [].concat(this.state.posts, this.state.post)
    });
  }


  render() {
    return (
      <>
        <TextArea
          type="text"
          placeholder="O que está acontecendo?"
          name="text"
          onChange={this.handleChange}
          value={this.state.post} />
        <ContentButtonSave>
          <ButtonSave onClick={this.handleSubmit}>Publicar</ButtonSave>
        </ContentButtonSave>
        <FeedContent>
          <FeedText>
            {this.state.posts.map(post => <TextLabel>{post}</TextLabel>)}
          </FeedText>
        </FeedContent>

      </>
    )
  }
}

export default Mural;