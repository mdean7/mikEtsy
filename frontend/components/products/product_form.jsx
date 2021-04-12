import React from "react";
import { Redirect } from "react-router-dom"

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
    this.state.redirect = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.imagePreview = this.imagePreview.bind(this);
    this.imageFile = this.imageFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.props.currentUserId === this.state.user_id) {
      if (this.state.photoFile) {
        formData.append("product[photo]", this.state.photoFile);
      }
      formData.append("product[title]", this.state.title);
      formData.append("product[description]", this.state.description);
      formData.append("product[price]", this.state.price);
      formData.append("product[user_id]", this.state.user_id);
      this.props.submitProduct(formData, this.props.product.id);
    } 
    this.setState({ redirect: "/user/show" });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  imageFile(e) {
    this.imagePreview(e);
  }

  imagePreview(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.photoUrl ? (
      <img className="preview" src={this.state.photoUrl} />
    ) : null;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type="text"
              onChange={this.update("title")}
              value={this.state.title}
            />
          </label>
          <label>
            Description
            <textarea
              onChange={this.update("description")}
              value={this.state.description}
            />
          </label>
          <label>
            Price
            <input
              type="number"
              min="0"
              onChange={this.update("price")}
              value={this.state.price}
            />
          </label>

          <label>
            Image
            <input
              className="product-form-button"
              type="file"
              onChange={this.imageFile}
            />
          </label>
          <div className="image-preview">
            <h3 className="product-form-labels">Preview</h3>
            <div className="image-input">{preview}</div>
          </div>

          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default ProductForm;
