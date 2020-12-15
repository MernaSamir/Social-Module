import React, { Component } from "react";
import { connect } from "react-redux";
import { sortBy, get, map, reject, toLower } from "lodash";
import "../style.css";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
class Posts extends Component {
  state = {
    text: "",
  };
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  search = () => {
    return this.props.posts.length != 0 ? (
      <TextField
        onChange={this.handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Search"
      ></TextField>
    ) : (
      <></>
    );
  };
  getList = () => {
    const { posts } = this.props;
    const { text } = this.state;
    console.log(text, "ttttt");
    let recentPosts = sortBy(posts, (o) => o.created_at).reverse();
    let filtered = toLower(text)
      ? reject(recentPosts, (v) => {
          // const c = toLowr(v.category);
          return (
            !toLower(get(v, "category")).includes(text) &&
            !toLower(get(v, "tags")).includes(text)
          );
        })
      : recentPosts;
    return (
      <div className="allPosts">
        {map(filtered, (
          d,
          i // return (
        ) => (
          <div key={i} className="postCont">
            <p className="p">{get(d, "text", "")}</p>
            {get(d.media, "type")?.includes("image") && (
              <img src={get(d.media, "file")} width="200" height="200" />
            )}
            {get(d.media, "type")?.includes("video") && (
              <video
                key={get(d.media, "name")}
                width="200"
                height="200"
                controls
              >
                <source src={get(d.media, "file")} type="video/mp4" />
              </video>
            )}
            <div className="info">
              <a href="#" className="tags">
                {get(d, "tags")}
              </a>
              {get(d, "category") && (
                <p className="cat">Category: {get(d, "category")}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };
  render() {
    return (
      <div className="posts">
        {this.search()}
        {this.getList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps)(Posts);
