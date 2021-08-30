
import React, { Component } from "react";
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import { IMAGES_PER_PAGE, fetchImages } from './service/fetchImages';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    searchQuery: '',
    pageNumber: 1,
    images: [],
    status: Status.IDLE,
    morePageImages: false,
    error: null,
  };

  componentDidUpdate (prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;

    if (
      prevState.searchQuery !== this.state.searchQuery &&
      this.state.searchQuery !== ''
    ) {
      this.setState({ status: Status.PENDING, pageNumber: 1 });
      this.getImages(searchQuery, pageNumber);
      }
  }
  getImages = (searchQuery, pageNumber) => {
    fetchImages(searchQuery, pageNumber).then((images) => {
      this.setState({ images: images.hits, status: Status.RESOLVED });

      if (images.total === 0) {
        this.setState({
          status: Status.REJECTED,
          error: 'ups, no images!',
        });
        return;
      }
      image.total > IMAGES_PER_PAGE
        ? this.setState({ morePageImages: true })
        : this.setState({ morePageImages: false });
      
      if (pageNumber > 1) {
        scrollDown();
      }
    })
      .catch((error) =>
        this.setState({ error: error.message, status: Status.REJECTED })
      );
  };
  onSearchFormSubmit = (searchQuery) => {
    this.setState({ searchQuery, pageNumber: 1 });

    if (searchQuery === '') {
      this.setState({
        status: Status.REJECTED,
        error: 'ups, You need enter yout request!',
      });
    }
  };
  onLoadMoreButtonClick = () => {
    const { searchQuery, pageNumber } = this.state;
    this.setState({
      status: Status.PENDING,
      pageNumber: pageNumber + 1,
    });
    this.getImages(searchQuery, pageNumber + 1);
  };


  render() {
    const { images, morePageImages, status, error } = this.state;

    return (
      // <Searchbar>
      //   <SearchForm></SearchForm>
      // </Searchbar>
      // <ImageGallery></ImageGallery>
      // <Button></Button>
    );
  }
  }



export default App;
