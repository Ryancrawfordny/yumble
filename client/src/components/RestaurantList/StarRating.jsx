import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./StarRating.css";

class StarRating extends Component {
  constructor() {
    super();
    this.state = {
      propTypes: {
        disabled: PropTypes.bool
      },
      getInitialState() {
        return {
          rating: this.props.rating || null,
          temp_rating: null
        };
      },
      rate(rating) {
        this.setState({
          rating: rating,
          temp_rating: rating
        });
      },
      star_over(rating) {
        this.state.temp_rating = this.state.rating;
        this.state.rating = rating;

        this.setState({
          rating: this.state.rating,
          temp_rating: this.state.temp_rating
        });
      },
      star_out() {
        this.state.rating = this.state.temp_rating;

        this.setState({ rating: this.state.rating });
      },
      render() {
        const stars = [];

        for (let i = 0; i < 5; i++) {
          let klass = "star-rating__star";

          if (this.state.rating >= i && this.state.rating != null) {
            klass += " is-selected";
          }

          stars.push(
            <label
              className={klass}
              onClick={this.rate.bind(this, i)}
              onMouseOver={this.star_over.bind(this, i)}
              onMouseOut={this.star_out}
            >
              ★
            </label>
          );
        }

        return <div className="star-rating">{stars}</div>;
      }
    };
  }
}

export default StarRating;
