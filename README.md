# README

# mikEsty
[Heroku Site](https://miketsy.herokuapp.com/#/)

mikEtsy is an Etsy clone. It is an ecommerce application that allows users to buy and sell custom made baskets of products from other users.


## Assembled Lovingly With 
* Ruby
* React
* Redux
* Javascript
* SCSS

## Features 
* Authorized User Accounts
* Basket Products
* Autocomplete Searching
* S3 AWS Image Hosting
* Product Reviews

## Le Code

### Autocomplete Search Functionality
The mikEtsy search function filters users requests in real time and allows them to select these filtered options as links to product pages.


#### MapStatetoProps Titles and Ids as a 2d array
```javascript
    titles: Object.values(state.products).map(product =>([product.title, product.id])),
```

#### Filtering Results
```javascript
  const results = [];    
    if (this.state.inV.length === 0) {
        return this.props.titles.sort();
    }

    this.props.titles.forEach(title => {
      let section = title[0].slice(0, this.state.inV.length);
      if (section.toLowerCase() === this.state.inV.toLowerCase()) {
        results.push(title);        
      }
    });

    if (results.length === 0) {
      results.push('No result...');
    }

  return results;
```
#### Returning the Filtered Title as a Link
```javascript
    <Link key={i} to={`/products/${result[1]}`}>
      <li key={i} onClick={this.selectTitle}>{result[0]}</li>
    </Link>
```

### Product Photo Selection with S3 Image Hosting.
Users can upload photos of their products and see a preview after selecting their file.


```javascript
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
```

### Reviews with Star Ratings
All reviews prompt users to rate the product then render the rating as either filled in in hollow stars based on the rating.

```javascript
  var starPower =[];
  var rate = parseInt(review.rating);
  var increment = 0;
  var max = 5; 

  while(increment < rate) {
    starPower.push(<span key={increment+Math.random()*100} className="material-icons black"> grade </span>);
    increment++;
  }

  while(max > rate) {
    starPower.push(<span key={increment+Math.random()*100} className="material-icons white"> star_outline </span>);
    max--;
  }
    }
```

## To-do
* Add Shopping Cart
* Add Order History

## Set up
* delete gemfile lock
* bundle install
* NPM install
* rails db:setup
* rails s
* npm start

